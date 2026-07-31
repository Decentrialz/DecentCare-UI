/**
 * Site configuration utilities
 */

/**
 * Get the base URL for the site
 * Uses NEXT_PUBLIC_SITE_URL from environment variables
 * Falls back to localhost in development
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  // Fallback for development
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  
  // Production fallback
  return 'https://decentcare.ai';
}

/**
 * Get canonical URL for a given path
 * @param path - The path to create a canonical URL for (e.g., '/about', '/blog/my-post')
 */
export function getCanonicalUrl(path: string): string {
  const baseUrl = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
