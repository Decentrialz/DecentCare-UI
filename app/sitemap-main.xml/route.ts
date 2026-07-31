import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { client } from '@/sanity/lib/client'

export async function GET() {
  // Get the base URL from the request hostname
  const headersList = await headers()
  const host = headersList.get('host') || 'decentcare.com'
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`
  
  // Get latest blog post date
  let latestBlogDate = new Date().toISOString()
  try {
    const latestPost = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0] {
      publishedAt
    }`)
    if (latestPost && latestPost.publishedAt) {
      latestBlogDate = new Date(latestPost.publishedAt).toISOString()
    }
  } catch (error) {
    console.error('Error fetching latest blog date:', error)
  }
  
  const staticPages = [
    { url: baseUrl, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/about`, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/success`, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/contact`, lastmod: new Date('2026-07-09').toISOString() },
    { url: `${baseUrl}/blog`, lastmod: latestBlogDate },
    { url: `${baseUrl}/services`, lastmod: new Date('2026-07-09').toISOString() },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
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
