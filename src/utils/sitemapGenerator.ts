export interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
  images?: SitemapImage[]
}

export interface SitemapImage {
  loc: string
  title: string
  caption: string
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const baseUrl = 'https://qr-generator-react.vercel.app'
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`

  urls.forEach(url => {
    sitemap += `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>`

    if (url.images && url.images.length > 0) {
      url.images.forEach(image => {
        sitemap += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`
      })
    }

    sitemap += `
  </url>`
  })

  sitemap += `
</urlset>`

  return sitemap
}

export const generateSitemapIndex = (sitemaps: string[]): string => {
  const baseUrl = 'https://qr-generator-react.vercel.app'
  
  let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  sitemaps.forEach(sitemap => {
    sitemapIndex += `
  <sitemap>
    <loc>${baseUrl}/${sitemap}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`
  })

  sitemapIndex += `
</sitemapindex>`

  return sitemapIndex
}

export const defaultSitemapUrls: SitemapUrl[] = [
  {
    loc: '/',
    lastmod: '2024-01-15',
    changefreq: 'weekly',
    priority: 1.0,
    images: [
      {
        loc: 'https://qr-generator-react.vercel.app/og-image.png',
        title: 'QR Code Generator - Create QR Codes with Custom Logos',
        caption: 'Professional QR code generator with logo support'
      }
    ]
  },
  {
    loc: '/generator',
    lastmod: '2024-01-15',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: '/features',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/how-to-use',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: '/best-practices',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/use-cases',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: '/faq',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: '/about',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    loc: '/privacy',
    lastmod: '2024-01-15',
    changefreq: 'yearly',
    priority: 0.3
  },
  {
    loc: '/terms',
    lastmod: '2024-01-15',
    changefreq: 'yearly',
    priority: 0.3
  },
  {
    loc: '/contact',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.4
  },
  {
    loc: '/blog',
    lastmod: '2024-01-15',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: '/examples',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    loc: '/api-docs',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.4
  },
  {
    loc: '/help',
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.5
  }
]
