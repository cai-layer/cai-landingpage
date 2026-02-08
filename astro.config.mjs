import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

// Vite plugin to serve index.html for /docs/ in dev mode
// (In production/GitHub Pages this works natively)
function serveDocsPlugin() {
  return {
    name: 'serve-docs',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/docs' || req.url === '/docs/') {
          const filePath = path.resolve('public/docs/index.html');
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://getcai.app',
  trailingSlash: 'always',
  vite: {
    plugins: [serveDocsPlugin()],
  },
});
