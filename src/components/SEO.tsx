import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO: React.FC<SEOProps> = ({
  title = "QR Code Generator - Create QR Codes with Custom Logos | Free Online Tool",
  description = "Generate professional QR codes with custom logos instantly. Free online QR code generator with advanced customization options, dark/light themes, and multiple export formats.",
  keywords = "QR code generator, QR code with logo, free QR code, online QR generator, custom QR code, QR code maker, QR code creator, business QR code, professional QR code",
  image = "https://qr-generator-react.vercel.app/og-image.png",
  url = "https://qr-generator-react.vercel.app/",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO
