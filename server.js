import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

const STATIC_DIR = path.join(__dirname, 'inviteeq.com');
const HTML_FILE = path.join(STATIC_DIR, 'demos', 'kashi-vishwanath.html');
const LAYOUTS_DIR = path.join(STATIC_DIR, 'layouts', 'kashi-vishwanath');

const rawHtml = fs.readFileSync(HTML_FILE, 'utf-8');
const rootPatchedHtml = rawHtml.replace(
  '<head>',
  '<head><script>if(window.location.pathname!=="/demos/kashi-vishwanath"){window.history.replaceState(null,"","/demos/kashi-vishwanath"+window.location.search+window.location.hash);}</script>'
);

const app = express();
app.disable('x-powered-by');

const remoteAssetCache = new Map();

app.get('/', (_req, res) => {
  res.type('html').send(rootPatchedHtml);
});

app.get(['/demos/kashi-vishwanath', '/demos/kashi-vishwanath.html'], (_req, res) => {
  res.type('html').send(rawHtml);
});

app.use(
  express.static(STATIC_DIR, {
    extensions: ['html'],
    maxAge: '1h',
  })
);

// Fallback for layout images not captured in the static mirror
app.get('/layouts/kashi-vishwanath/:file', async (req, res) => {
  const file = req.params.file;
  if (!/^[a-zA-Z0-9_.-]+$/.test(file)) {
    return res.status(400).end();
  }

  if (remoteAssetCache.has(file)) {
    const cached = remoteAssetCache.get(file);
    res.setHeader('Content-Type', cached.contentType);
    return res.send(cached.body);
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const upstream = await fetch(`https://inviteeq.com/layouts/kashi-vishwanath/${file}`, {
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (upstream.ok) {
      const contentType = upstream.headers.get('content-type') || 'image/webp';
      const arrayBuf = await upstream.arrayBuffer();
      const body = Buffer.from(arrayBuf);
      if (remoteAssetCache.size < 50) {
        remoteAssetCache.set(file, { contentType, body });
      }
      res.setHeader('Content-Type', contentType);
      return res.send(body);
    }
  } catch {
    // Fall through to local variant fallback
  }

  const fallbackName = file
    .replace(/-w\.webp$/, '-p.webp')
    .replace(/-desktop\.webp$/, '-mobile.webp');
  if (fallbackName !== file) {
    const fallbackPath = path.join(LAYOUTS_DIR, fallbackName);
    if (fs.existsSync(fallbackPath)) {
      return res.sendFile(fallbackPath);
    }
  }

  return res.status(404).end();
});

app.get('/favicon.ico', (_req, res) => {
  res.redirect(302, '/icon.svg');
});

app.use((req, res) => {
  if (req.query._rsc !== undefined) {
    return res.status(404).end();
  }
  const accept = req.headers.accept || '';
  if (req.method === 'GET' && !path.extname(req.path) && accept.includes('text/html')) {
    return res.type('html').send(rootPatchedHtml);
  }
  return res.status(404).end();
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
