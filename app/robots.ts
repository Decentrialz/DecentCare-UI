import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Check if it's the production environment
  const isProduction = process.env.NEXT_PUBLIC_ENV === 'production'
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://decentcare.ai'
  
  // Only allow crawling in production
  if (!isProduction) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: ['/'],
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }
  
  return {
    rules: [
      // General crawlers - Block all API routes and restricted areas
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/staff/',
          '/qr',
          '/tracking',
          '/api/collect',
          '/api/link-patient',
          '/api/tokens',
          '/api/virtual-numbers/',
        ],
      },
      // Googlebot - Allow public content, block sensitive endpoints
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: [
          '/staff/',
          '/qr',
          '/tracking',
          '/api/collect',
          '/api/link-patient',
          '/api/tokens',
          '/api/virtual-numbers/',
        ],
      },
      // Bingbot - Similar to Googlebot
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: [
          '/staff/',
          '/qr',
          '/tracking',
          '/api/',
        ],
      },
      // Yahoo Slurp
      {
        userAgent: 'Slurp',
        allow: ['/'],
        disallow: [
          '/staff/',
          '/qr',
          '/tracking',
          '/api/',
        ],
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
