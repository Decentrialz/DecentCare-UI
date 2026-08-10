// sanity/lib/client.ts

import { createClient, SanityClient } from '@sanity/client'

/**
 * Creates a read-only Sanity client
 * Used for frontend blog fetching
 */
export function createReadOnlySanityClient(): SanityClient {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yd06f9bo';
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

  if (!projectId || !dataset) {
    const errorMessage = `
            ❌ Missing required Sanity environment variables

            NEXT_PUBLIC_SANITY_PROJECT_ID: ${projectId ? 'OK' : 'MISSING'}
            NEXT_PUBLIC_SANITY_DATASET: ${dataset ? 'OK' : 'MISSING'}
            `

    console.error(errorMessage)
    throw new Error(errorMessage)
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',

    /**
     * Disable CDN for ISR to ensure fresh data during revalidation
     * For production with high traffic, consider enabling CDN with a low stale-while-revalidate value
     */
    useCdn: false,

    /**
     * Helps identify requests in Sanity logs
     */
    requestTagPrefix: 'decentcare-frontend',
  })
}

export const client = createReadOnlySanityClient()