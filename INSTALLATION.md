# Installation Guide - QR Code Generator

## System Requirements

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Step-by-Step Installation

### 1. Download the Project
After purchase, you'll receive a ZIP file containing the complete source code.

### 2. Extract Files
Extract the ZIP file to your desired location:
```bash
# Windows
# Right-click → Extract All

# macOS/Linux
unzip qr-generator.zip
cd qr-generator
```

### 3. Install Dependencies
Open terminal/command prompt in the project directory and run:

```bash
npm install
```

**Alternative with Yarn:**
```bash
yarn install
```

### 4. Start Development Server
```bash
npm run dev
```

**Alternative with Yarn:**
```bash
yarn dev
```

### 5. Open in Browser
Navigate to: `http://localhost:5173`

## Building for Production

### 1. Create Production Build
```bash
npm run build
```

### 2. Preview Production Build
```bash
npm run preview
```

### 3. Deploy
The `dist` folder contains all files needed for deployment.

## Troubleshooting

### Common Issues

**Issue: "Node.js not found"**
- Solution: Install Node.js from [nodejs.org](https://nodejs.org/)

**Issue: "npm command not found"**
- Solution: Node.js includes npm, reinstall Node.js

**Issue: "Port 5173 already in use"**
- Solution: Kill the process or use a different port:
```bash
npm run dev -- --port 3000
```

**Issue: "Dependencies installation failed"**
- Solution: Clear cache and try again:
```bash
npm cache clean --force
npm install
```

**Issue: "Build failed"**
- Solution: Check Node.js version (must be 18+):
```bash
node --version
```

### Performance Optimization

**For faster builds:**
```bash
# Use npm ci for production
npm ci

# Clear cache if needed
npm cache clean --force
```

**For development:**
```bash
# Use --force to bypass cache
npm run dev -- --force
```

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server for SPA routing

## Customization

### Environment Variables
Create `.env` file for custom settings:
```env
VITE_APP_TITLE=My QR Generator
VITE_APP_DESCRIPTION=Custom QR Code Generator
```

### Build Configuration
Modify `vite.config.ts` for custom build settings:
```typescript
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser'
  }
})
```

## Support

If you encounter any issues:

1. **Check this guide** for common solutions
2. **Verify system requirements** are met
3. **Contact support** with:
   - Operating system
   - Node.js version
   - Error messages
   - Steps to reproduce

## Next Steps

After successful installation:

1. **Test all features** in development mode
2. **Customize branding** if needed
3. **Add your own logos** for testing
4. **Deploy to production** when ready

---

**Need help? Contact us at support@yourdomain.com** 📧
