import {
  accountsTable,
  sessionsTable,
  usersTable,
  verificationTokensTable
} from "@/drizzle/schema"
import { HttpEmailProvider } from "@/lib/auth/http-email-provider"
import { db } from "@/lib/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export default {
  /**
   * @see {@link https://authjs.dev/reference/adapter/drizzle}
   */
  adapter: DrizzleAdapter(db, {
    // @ts-expect-error custom citext column causes an error
    usersTable,
    accountsTable,
    sessionsTable,
    verificationTokensTable
  }),
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
