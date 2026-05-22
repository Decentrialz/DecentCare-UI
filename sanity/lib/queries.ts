// sanity/lib/queries.ts
// GROQ queries for blog data

/**
 * Get all posts (preview/listing)
 * Ordered by publishedAt descending
 */
export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      slug,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      _id,
      name,
      slug
    },
    tags[]->{
      _id,
      name,
      slug
    }
  }
`

/**
 * Get featured posts (for Latest Blogs carousel)
 * Limited to 3 most recent featured posts
 */
export const FEATURED_POSTS_QUERY = `
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      slug,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      name,
      slug
    }
  }
`

/**
 * Get single post by slug (full detail)
 */
export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    seoTitle,
    seoDescription,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body,
    author->{
      _id,
      name,
      slug,
      image {
        asset->{
          _id,
          url
        }
      },
      bio
    },
    categories[]->{
      _id,
      name,
      slug,
      description
    },
    tags[]->{
      _id,
      name,
      slug
    }
  }
`

/**
 * Get all post slugs (for generateStaticParams)
 */
export const ALL_POST_SLUGS_QUERY = `
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`

/**
 * Get recommended posts (exclude current post)
 * Returns posts with similar categories or recent posts
 */
export const RECOMMENDED_POSTS_QUERY = `
  *[_type == "post" && _id != $excludeId] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      slug
    },
    categories[]->{
      name,
      slug
    }
  }
`

/**
 * Search posts by title, excerpt, or category
 */
export const SEARCH_POSTS_QUERY = `
  *[_type == "post" && (
    title match $searchTerm ||
    excerpt match $searchTerm ||
    categories[]->name match $searchTerm
  )] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      slug
    },
    categories[]->{
      name,
      slug
    }
  }
`

/**
 * Get posts by category
 */
export const POSTS_BY_CATEGORY_QUERY = `
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      slug
    },
    categories[]->{
      name,
      slug
    }
  }
`

/**
 * Get all categories
 */
export const ALL_CATEGORIES_QUERY = `
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description
  }
`

/**
 * Get all tags
 */
export const ALL_TAGS_QUERY = `
  *[_type == "tag"] | order(name asc) {
    _id,
    name,
    slug
  }
`