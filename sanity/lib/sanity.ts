// sanity/lib/sanity.ts
// Utility functions for Sanity data transformation

import type { SanityPostPreview, SanityPost, BlogArticle, BlogArticleDetail } from '@/sanity/types/blog'
import { urlFor } from './image'

/**
 * Format date from ISO string to "DD Month YYYY"
 */
export function formatDate(dateString?: string): string {
  if (!dateString) return 'No date'

  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

/**
 * Format read time
 * If readTime exists in Sanity, use it
 * Otherwise, calculate from body content
 */
export function formatReadTime(readTime?: string | null, bodyLength?: number): string {
  // Check if readTime is a valid string
  if (readTime && typeof readTime === 'string' && readTime.trim()) {
    // If already formatted (e.g., "7 min read"), return as is
    if (readTime.includes('min')) return readTime
    // If just a number, format it
    return `${readTime} min read`
  }

  // Calculate from body length (rough estimate: 200 words per minute)
  if (bodyLength) {
    const minutes = Math.max(1, Math.ceil(bodyLength / 200))
    return `${minutes} min read`
  }

  return '5 min read' // Default fallback
}

/**
 * Get image URL from Sanity image asset
 */
export function getImageUrl(image?: { asset?: { _ref?: string; url?: string } } | null): string {
  if (!image?.asset) {
    // Return placeholder image
    return '/placeholder-blog.jpg'
  }

  // If URL is already available
  if ('url' in image.asset && image.asset.url) {
    return image.asset.url
  }

  // Build URL using image builder
  try {
    return urlFor(image).width(1200).height(630).url()
  } catch (error) {
    console.error('Error building image URL:', error)
    return '/placeholder-blog.jpg'
  }
}

/**
 * Get author image URL from Sanity
 * Returns null if no image exists (for fallback handling)
 */
export function getAuthorImageUrl(image?: { asset?: { _ref?: string; url?: string } } | null): string | undefined {
  if (!image?.asset) {
    return undefined
  }

  // If URL is already available
  if ('url' in image.asset && image.asset.url) {
    return image.asset.url
  }

  // Build URL using image builder (smaller size for author avatar)
  try {
    return urlFor(image).width(100).height(100).url()
  } catch (error) {
    console.error('Error building author image URL:', error)
    return undefined
  }
}

/**
 * Transform Sanity post preview to BlogArticle
 */
export function transformPostToBlogArticle(post: SanityPostPreview): BlogArticle {
  const slug = post.slug?.current || post._id
  const category = post.categories?.[0]?.name || 'Uncategorized'

  return {
    id: post._id,
    slug,
    imageUrl: getImageUrl(post.mainImage),
    category,
    date: formatDate(post.publishedAt),
    readTime: formatReadTime(post.readTime),
    title: post.title,
    description: post.excerpt || '',
    author: post.author?.name || 'Unknown Author',
    authorImage: getAuthorImageUrl((post.author as any)?.image),
    href: `/blog/${slug}`,
  }
}

/**
 * Transform full Sanity post to BlogArticleDetail
 */
export function transformPostToBlogArticleDetail(post: SanityPost): BlogArticleDetail {
  const baseArticle = transformPostToBlogArticle(post as unknown as SanityPostPreview)

  return {
    ...baseArticle,
    body: post.body || [],
    categories: post.categories || [],
    tags: post.tags || [],
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
  }
}

/**
 * Extract category names from Sanity categories
 */
export function getCategoryNames(categories?: Array<{ name: string }>): string[] {
  return categories?.map(cat => cat.name) || []
}

/**
 * Extract tag names from Sanity tags
 */
export function getTagNames(tags?: Array<{ name: string }>): string[] {
  return tags?.map(tag => tag.name) || []
}
