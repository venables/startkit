import { env } from "@/env"

function host(fallback = "") {
  if (env.NEXT_PUBLIC_HOST) {
    return env.NEXT_PUBLIC_HOST
  }

  if (env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${env.NEXT_PUBLIC_VERCEL_URL}`
  }

  if (env.VERCEL_URL) {
    return `https://${env.VERCEL_URL}`
  }

  return fallback
}

/**
 * Helper function to determine the hostname for the given environment,
 * with a focus on working with Vercel deployments.
 *
 * @returns the hostname for the given environment
 */
export function appHost(includeProtocol = true): string {
  return includeProtocol
    ? host("")
    : host("").replace("https://", "").replace("http://", "")
}
