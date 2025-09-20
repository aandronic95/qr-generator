# Deployment Guide - QR Code Generator

## Quick Deployment Options

### 🚀 Vercel (Recommended)

**Easiest and fastest deployment option**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/qr-generator.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically!

3. **Configuration**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 🌐 Netlify

**Great for static hosting with custom domains**

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign up and connect GitHub
   - Select your repository

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Node Version: `18`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live in minutes!

### ☁️ GitHub Pages

**Free hosting with custom domain support**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### 🐳 Docker Deployment

**For containerized deployment**

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine as builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build and Run**
   ```bash
   docker build -t qr-generator .
   docker run -p 80:80 qr-generator
   ```

## Custom Domain Setup

### 1. **Vercel Custom Domain**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed
- SSL certificate auto-generated

### 2. **Netlify Custom Domain**
- Go to Site Settings → Domain Management
- Add custom domain
- Configure DNS settings
- SSL automatically enabled

### 3. **GitHub Pages Custom Domain**
- Add `CNAME` file to `public` folder
- Configure DNS with your domain provider
- Enable HTTPS in repository settings

## Environment Variables

### Development
Create `.env.local`:
```env
VITE_APP_TITLE=QR Code Generator
VITE_APP_DESCRIPTION=Professional QR Code Generator
VITE_APP_URL=http://localhost:5173
```

### Production
Set in your hosting platform:
```env
VITE_APP_TITLE=QR Code Generator
VITE_APP_DESCRIPTION=Professional QR Code Generator
VITE_APP_URL=https://your-domain.com
```

## Performance Optimization

### 1. **Build Optimization**
```bash
# Production build with optimizations
npm run build

# Analyze bundle size
npx vite-bundle-analyzer dist
```

### 2. **CDN Setup**
- Use Cloudflare, AWS CloudFront, or similar
- Enable gzip compression
- Set proper cache headers

### 3. **Image Optimization**
- Use WebP format for images
- Implement lazy loading
- Optimize logo files

## SEO Configuration

### 1. **Meta Tags**
Update `src/utils/seo.ts` with your domain:
```typescript
export const defaultSEO = {
  title: "QR Code Generator - Professional Multi-language Tool",
  description: "Generate professional QR codes with custom logos. Support for 7 languages, dark/light themes, and multiple export formats.",
  url: "https://your-domain.com",
  image: "https://your-domain.com/og-image.jpg"
}
```

### 2. **Sitemap**
- Sitemap auto-generated in `public/sitemap.xml`
- Submit to Google Search Console
- Update robots.txt if needed

### 3. **Analytics**
Add Google Analytics in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Monitoring & Maintenance

### 1. **Performance Monitoring**
- Use Vercel Analytics or Netlify Analytics
- Monitor Core Web Vitals
- Set up uptime monitoring

### 2. **Error Tracking**
- Add Sentry for error tracking
- Monitor user feedback
- Regular performance audits

### 3. **Updates**
- Keep dependencies updated
- Monitor security vulnerabilities
- Regular backups

## Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**404 Errors on Refresh**
- Configure server for SPA routing
- Add redirect rules for all routes to index.html

**Slow Loading**
- Enable gzip compression
- Use CDN for static assets
- Optimize images and fonts

**Mobile Issues**
- Test on real devices
- Check viewport meta tag
- Validate responsive design

## Security Considerations

### 1. **HTTPS Only**
- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use HSTS headers

### 2. **Content Security Policy**
Add CSP headers:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

### 3. **Regular Updates**
- Keep dependencies updated
- Monitor security advisories
- Regular security audits

---

**Your QR Code Generator is now ready for production deployment!** 🚀

For support, contact: support@yourdomain.com
