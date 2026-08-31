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
  // Commented out - blog sitemap not required for now
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
  
  const sitemaps = [
    { loc: `${baseUrl}/sitemap-main.xml`, lastmod: new Date('2026-08-31').toISOString() },
    { loc: `${baseUrl}/sitemap-blog.xml`, lastmod: latestBlogDate },
    { loc: `${baseUrl}/sitemap-services.xml`,  lastmod: new Date('2026-07-09').toISOString() },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sm => `  <sitemap>
    <loc>${sm.loc}</loc>
    <lastmod>${sm.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
