// sanity/types/blog.ts
// TypeScript types for Sanity blog data

import type { PortableTextBlock } from '@portabletext/react'

/**
 * Author Type
 */
export interface SanityAuthor {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  bio?: PortableTextBlock[]
}

/**
 * Category Type
 */
export interface SanityCategory {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
}

/**
 * Tag Type
 */
export interface SanityTag {
  _id: string
  name: string
  slug: {
    current: string
  }
}

/**
 * Post Type (Full)
 */
export interface SanityPost {
  _id: string
  _type: 'post'
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  body?: PortableTextBlock[]
  author?: SanityAuthor
  categories?: SanityCategory[]
  tags?: SanityTag[]
  publishedAt?: string
  readTime?: string | null
  featured?: boolean
  seoTitle?: string
  seoDescription?: string
}

/**
 * Post Preview (for listings)
 */
export interface SanityPostPreview {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  author?: {
    name: string
  }
  categories?: Array<{
    name: string
    slug: {
      current: string
    }
  }>
  tags?: Array<{
    name: string
    slug: {
      current: string
    }
  }>
  publishedAt?: string
  readTime?: string | null
  featured?: boolean
}

/**
 * Frontend Blog Article Type (Transformed from Sanity)
 * Maintains compatibility with existing UI components
 */
export interface BlogArticle {
  id: string // Sanity _id
  slug: string // slug.current
  imageUrl: string // Transformed from mainImage
  category: string // First category name or "Uncategorized"
  date: string // Formatted publishedAt
  readTime: string // e.g., "7 min read"
  title: string
  description: string // excerpt
  author: string // author.name
  authorImage?: string // author image URL or null
  authorBio?: PortableTextBlock[] // author bio content
  href: string // /blog/[slug]
}

/**
 * Frontend Blog Article Detail Type
 */
export interface BlogArticleDetail extends BlogArticle {
  body: PortableTextBlock[] // Portable Text body
  categories: SanityCategory[]
  tags: SanityTag[]
  seoTitle?: string
  seoDescription?: string
}
