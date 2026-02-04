# 🚀 Deployment Guide

## Vercel (Recommended)

### One-Click Deploy
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Astro - just click "Deploy"

### CLI Deploy
```bash
npm install -g vercel
vercel
```

---

## Netlify

### One-Click Deploy
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### CLI Deploy
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## Cloudflare Pages

1. Push code to GitHub
2. Visit [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect GitHub repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

---

## GitHub Pages

### Setup
Add to `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

### Deploy with GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Custom Server

### Build
```bash
npm run build
```

### Upload `dist/` folder to your server

### Configure web server:

#### Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache
Create `.htaccess` in `dist/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📦 Before Deploying

- [ ] Update site URL in `astro.config.mjs`
- [ ] Add real images (not placeholders)
- [ ] Update all external links
- [ ] Add favicon (`public/favicon.svg`)
- [ ] Test `npm run build` locally
- [ ] Preview with `npm run preview`
- [ ] Check mobile responsiveness

---

## 🔧 Environment Variables

If you need environment variables:

Create `.env`:
```
PUBLIC_API_URL=https://api.example.com
```

Access in Astro:
```javascript
const apiUrl = import.meta.env.PUBLIC_API_URL;
```

**Note:** Prefix public variables with `PUBLIC_`

---

## 📊 Analytics (Optional)

### Google Analytics
Add to `src/layouts/Layout.astro` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🎯 Performance Tips

1. **Optimize images** before uploading:
   ```bash
   npm install -g sharp-cli
   sharp -i input.png -o output.png --webp
   ```

2. **Enable image optimization** in Astro:
   ```bash
   npm install @astrojs/image
   ```

3. **Compress videos**:
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 23 output.mp4
   ```

---

Happy deploying! 🚀
