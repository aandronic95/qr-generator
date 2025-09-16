export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QR Code Generator",
    "description": "Generate professional QR codes with custom logos instantly. Free online QR code generator with advanced customization options.",
    "url": "https://qr-generator-react.vercel.app/",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "QR Code Generator",
      "url": "https://qr-generator-react.vercel.app/"
    },
    "featureList": [
      "Custom logo integration",
      "Multiple output formats",
      "Error correction levels",
      "Dark/Light theme support",
      "Responsive design",
      "Free to use"
    ],
    "screenshot": "https://qr-generator-react.vercel.app/og-image.png",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0.0",
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString().split('T')[0]
  }
}

export const generateBreadcrumbStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://qr-generator-react.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "QR Code Generator",
        "item": "https://qr-generator-react.vercel.app/"
      }
    ]
  }
}

export const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I generate a QR code with a logo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply enter your text or URL, upload a logo image, adjust the settings, and click 'Generate QR'. The logo will be automatically placed in the center of the QR code."
        }
      },
      {
        "@type": "Question",
        "name": "What file formats are supported for logos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support all common image formats including PNG, JPEG, JPG, GIF, and WebP for logo uploads."
        }
      },
      {
        "@type": "Question",
        "name": "What output formats are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can download your QR codes in PNG, JPEG, or BMP formats."
        }
      },
      {
        "@type": "Question",
        "name": "Is this QR code generator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our QR code generator is completely free to use with no limitations or hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "What error correction levels are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer four error correction levels: L (7%), M (15%), Q (25%), and H (30%). Higher levels provide better error correction but result in larger QR codes."
        }
      }
    ]
  }
}
