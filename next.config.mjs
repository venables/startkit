import "./env/env.mjs"

import { createSecureHeaders } from "next-secure-headers"
import nextMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Toggle experimental features
   */
  experimental: {
    mdxRs: true,
    turbo: {
      resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"]
    }
  },
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

const withMDX = nextMDX()

export default withMDX(nextConfig)
