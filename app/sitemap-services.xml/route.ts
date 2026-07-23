import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function GET() {
  // Get the base URL from the request hostname
  const headersList = await headers()
  const host = headersList.get('host') || 'decentcare.com'
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`
  
  const servicePages = [
    { url: `${baseUrl}/services/care-journey-crm`, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/services/business-strategy`, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/services/web-development`, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/services/paid-marketing`, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/services/seo-ai-search`, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/services/smm`, lastmod: new Date('2026-07-09').toISOString() },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${servicePages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
