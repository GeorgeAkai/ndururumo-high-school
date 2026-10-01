export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-01";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

/**
 * The site works without a Sanity project: until the env vars are set,
 * pages render the built-in content in `src/lib/fallback.ts`.
 */
export const isSanityConfigured = projectId.length > 0;
