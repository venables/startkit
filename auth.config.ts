import { type NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import { HttpEmailProvider } from "@/lib/auth/http-email-provider"

import { adapter } from "./lib/db/adapter"

export default {
  /**
   * @see {@link https://authjs.dev/reference/adapter/drizzle}
   */
  adapter,

  /**
   *
   */
  providers: [Google, GitHub, HttpEmailProvider],

  /**
   * Using JWTs for session tokens, so we can access the user's ID and email
   * from edge networks without requiring database access (which may not be
   * available in edge environments).
   */
  session: { strategy: "jwt" },

  /**
   *
   */
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }

      return session
    }
  },

  /**
   *
   */
  pages: {
    signIn: "/signin"
  }
} satisfies NextAuthConfig
