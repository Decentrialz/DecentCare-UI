import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
 
export default async function robots(): Promise<MetadataRoute.Robots> {
  // Get the actual hostname from the request
  const headersList = await headers()
  const hostname = headersList.get('host') || 'localhost'
  
  // Check if it's the production domain
  const isProduction = hostname === 'decentcare.com' || hostname === 'www.decentcare.com'
  
  const baseUrl = isProduction ? `https://${hostname}` : process.env.NEXT_PUBLIC_SITE_URL || 'https://decentcare.com'
  
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
      // Block AI scraping bots
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: ['/'],
      },
      {
        userAgent: 'cohere-ai',
        disallow: ['/'],
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
