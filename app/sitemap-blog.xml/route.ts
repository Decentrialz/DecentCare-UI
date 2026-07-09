import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { client } from '@/sanity/lib/client'
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries'

export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  // Get the base URL from the request hostname
  const headersList = await headers()
  const host = headersList.get('host') || 'decentcare.com'
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`
  
  const blogPages: { url: string; lastmod: string }[] = []

  // Fetch blog posts from Sanity
  try {
    const posts = await client.fetch(ALL_POSTS_QUERY)
    
    if (posts && Array.isArray(posts)) {
      posts.forEach((post: any) => {
        const slug = typeof post.slug === 'string' ? post.slug : post.slug?.current
        if (slug) {
          blogPages.push({
            url: `${baseUrl}/blog/${slug}`,
            lastmod: new Date(post.publishedAt).toISOString(),
          })
        }
      })
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }
  
  // If no blog posts found, return at least an empty but valid sitemap
  if (blogPages.length === 0) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`
    
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogPages.map(page => `  <url>
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
