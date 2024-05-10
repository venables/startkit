import { fileURLToPath } from "node:url"
import createJiti from "jiti"
import { withContentlayer } from "next-contentlayer2"
import { createSecureHeaders } from "next-secure-headers"

const jiti = createJiti(fileURLToPath(import.meta.url))
jiti("./env")

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Disable the `x-powered-by: nextjs` header
   */
  poweredByHeader: false,
  /**
   * Custom headers
   */
  async headers() {
    return [
      /**
       * Add security headers to all routes
       */
      { source: "/(.*)", headers: createSecureHeaders() }
    ]
  }
}

export default withContentlayer(nextConfig)
