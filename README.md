# QR Code Generator - Multi-Language Edition

![QR Code Generator](https://img.shields.io/badge/QR%20Generator-Multi%20Language-blue)
![React](https://img.shields.io/badge/React-18.0+-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6)
![Vite](https://img.shields.io/badge/Vite-5.0+-646cff)

A professional, feature-rich QR Code Generator built with React and TypeScript. Generate QR codes with custom logos, multiple language support, and advanced customization options.

## ✨ Features

### 🌍 Multi-Language Support
- **7 Languages**: English, German, French, Spanish, Italian, Portuguese, Dutch
- **Auto-detection**: Automatically detects user's browser language
- **Persistent**: Language preference saved in local storage

### 🎨 Advanced Customization
- **Custom Logos**: Add your own logo to QR codes
- **Logo Settings**: Adjust size (max 30%) and padding
- **Error Correction**: 4 levels (L, M, Q, H) for different use cases
- **Output Formats**: PNG, JPEG, BMP support
- **Box Size**: Customizable QR code dimensions
- **Border Control**: Adjustable border width

### 🎯 User Experience
- **Real-time Preview**: See changes instantly
- **Dark/Light Theme**: Toggle between themes
- **Responsive Design**: Works on all devices
- **Copy to Clipboard**: Easy image sharing
- **Download Options**: Multiple format support

### 🚀 Technical Features
- **Modern Stack**: React 18, TypeScript, Vite
- **State Management**: Redux Toolkit with persistence
- **SEO Optimized**: Meta tags, sitemaps, structured data
- **Performance**: Optimized bundle size and loading
- **Accessibility**: ARIA labels and keyboard navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download** the project
```bash
git clone https://github.com/aandronic95/qr-generator.git
cd qr-generator
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` folder, ready for deployment.

## 📖 Usage Guide

### Basic QR Generation
1. Enter text or URL in the input field
2. Click "Preview" to see the QR code
3. Adjust settings as needed
4. Click "Generate QR" to download

### Adding Custom Logos
1. Click "Select logo" and choose an image file
2. Adjust logo size (recommended: 15-25%)
3. Set white space padding for better visibility
4. Preview and generate

### Language Switching
1. Use the language dropdown in the header
2. Language preference is automatically saved
3. All UI elements update instantly

## 🛠️ Customization

### Adding New Languages
1. Create new file in `src/i18n/locales/`
2. Add translations following existing structure
3. Update `src/i18n/index.ts` to register new language
4. Add language option to `LanguageSelector.tsx`

### Styling
- CSS variables for easy theme customization
- Responsive design with mobile-first approach
- Dark/light theme support

### Configuration
- Modify `vite.config.ts` for build settings
- Update `tsconfig.json` for TypeScript options
- Customize SEO in `src/utils/seo.ts`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── QRForm.tsx
│   ├── QRPreview.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── i18n/               # Internationalization
│   ├── index.ts
│   └── locales/        # Language files
├── store/              # Redux store
│   ├── slices/
│   └── middleware/
├── utils/              # Utility functions
│   ├── qrGenerator.ts
│   ├── storage.ts
│   └── seo.ts
└── types/              # TypeScript definitions
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Other Platforms
The app is a standard Vite React application and can be deployed to any static hosting service.

## 🔧 Technical Details

### Dependencies
- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and better DX
- **Vite**: Fast build tool and dev server
- **Redux Toolkit**: State management
- **React i18next**: Internationalization
- **QR Code Library**: QR code generation

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance
- Bundle size: ~200KB gzipped
- First load: <2s on 3G
- Lighthouse score: 95+

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support, email support@yourdomain.com or create an issue in the [GitHub repository](https://github.com/aandronic95/qr-generator/issues).

## 📚 Documentation

- **[Installation Guide](INSTALLATION.md)** - Detailed setup instructions
- **[Features List](FEATURES.md)** - Complete feature documentation
- **[Deployment Guide](DEPLOYMENT.md)** - Production deployment options
- **[Gumroad Listing](GUMROAD_LISTING.md)** - Product listing information

## 🎯 Perfect For

- **Developers**: Quick QR code generation for projects
- **Businesses**: Professional QR codes with branding
- **Marketers**: Multi-language campaigns
- **Students**: Learning React and TypeScript
- **Agencies**: Client projects and white-label solutions

---

**Ready to generate professional QR codes? Get started now!** 🚀