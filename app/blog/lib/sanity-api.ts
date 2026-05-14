// app/blog/lib/sanity-api.ts
// Blog data fetching functions using Sanity

import { client } from '@/sanity/lib/client'
import {
  ALL_POSTS_QUERY,
  FEATURED_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  ALL_POST_SLUGS_QUERY,
  RECOMMENDED_POSTS_QUERY,
  SEARCH_POSTS_QUERY,
  POSTS_BY_CATEGORY_QUERY,
  ALL_CATEGORIES_QUERY,
} from '@/sanity/lib/queries'
import type { SanityPostPreview, SanityPost, SanityCategory } from '@/sanity/types/blog'
import type { BlogArticle, BlogArticleDetail } from '@/sanity/types/blog'
import { transformPostToBlogArticle, transformPostToBlogArticleDetail } from '@/sanity/lib/sanity'

/**
 * Get all blog posts
 * Used for: Blog listing page, All Articles section
 */
export async function getAllPosts(): Promise<BlogArticle[]> {
  try {
    const posts = await client.fetch<SanityPostPreview[]>(ALL_POSTS_QUERY)
    return posts.map(transformPostToBlogArticle)
  } catch (error) {
    console.error('Error fetching all posts:', error)
    return []
  }
}

/**
 * Get featured posts for Latest Blogs carousel
 * Returns up to 3 most recent featured posts
 */
export async function getFeaturedPosts(): Promise<BlogArticle[]> {
  try {
    const posts = await client.fetch<SanityPostPreview[]>(FEATURED_POSTS_QUERY)
    return posts.map(transformPostToBlogArticle)
  } catch (error) {
    console.error('Error fetching featured posts:', error)
    // Fallback to latest 3 posts if no featured posts
    const allPosts = await getAllPosts()
    return allPosts.slice(0, 3)
  }
}

/**
 * Get single post by slug
 * Used for: Blog detail page
 */
export async function getPostBySlug(slug: string): Promise<BlogArticleDetail | null> {
  try {
    const post = await client.fetch<SanityPost>(POST_BY_SLUG_QUERY, { slug })
    
    if (!post) {
      return null
    }

    return transformPostToBlogArticleDetail(post)
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error)
    return null
  }
}

/**
 * Get all post slugs for static generation
 * Used for: generateStaticParams
 */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const slugs = await client.fetch<Array<{ slug: string }>>(ALL_POST_SLUGS_QUERY)
    return slugs.map(item => item.slug)
  } catch (error) {
    console.error('Error fetching post slugs:', error)
    return []
  }
}

/**
 * Get recommended posts (excluding current post)
 * Used for: Recommended blogs section on detail page
 */
export async function getRecommendedPosts(
  excludeId: string,
  limit: number = 9
): Promise<BlogArticle[]> {
  try {
    const posts = await client.fetch<SanityPostPreview[]>(RECOMMENDED_POSTS_QUERY, {
      excludeId,
      limit,
    })
    return posts.map(transformPostToBlogArticle)
  } catch (error) {
    console.error('Error fetching recommended posts:', error)
    return []
  }
}

/**
 * Search posts by query string
 * Searches in title, excerpt, and category names
 */
export async function searchPosts(query: string): Promise<BlogArticle[]> {
  if (!query.trim()) {
    return getAllPosts()
  }

  try {
    // Add wildcards for partial matching
    const searchTerm = `*${query}*`
    const posts = await client.fetch<SanityPostPreview[]>(SEARCH_POSTS_QUERY, { searchTerm })
    return posts.map(transformPostToBlogArticle)
  } catch (error) {
    console.error('Error searching posts:', error)
    return []
  }
}

/**
 * Get posts by category slug
 */
export async function getPostsByCategory(categorySlug: string): Promise<BlogArticle[]> {
  try {
    const posts = await client.fetch<SanityPostPreview[]>(POSTS_BY_CATEGORY_QUERY, {
      categorySlug,
    })
    return posts.map(transformPostToBlogArticle)
  } catch (error) {
    console.error(`Error fetching posts for category "${categorySlug}":`, error)
    return []
  }
}

/**
 * Get all categories
 * Used for: Category filter dropdown
 */
export async function getAllCategories(): Promise<SanityCategory[]> {
  try {
    return await client.fetch<SanityCategory[]>(ALL_CATEGORIES_QUERY)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

/**
 * Check if a post exists by slug
 * Useful for validation
 */
export async function postExists(slug: string): Promise<boolean> {
  try {
    const post = await getPostBySlug(slug)
    return post !== null
  } catch (error) {
    return false
  }
}
