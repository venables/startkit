/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import EmailProvider from "next-auth/providers/email"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import { env } from "@/env"
import { prisma } from "@/lib/database"

import { sendVerificationRequest } from "./send-verification-request"

import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  /**
   * https://authjs.dev/reference/adapter/prisma
   */
  adapter: PrismaAdapter(prisma),
  /**
   * https://next-auth.js.org/providers/
   */
  providers: [
    /**
     *
     */
    EmailProvider({
      from: env.EMAIL_FROM,
      sendVerificationRequest
    }),
    /**
     * https://next-auth.js.org/providers/google
     */
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    /**
     * https://next-auth.js.org/providers/github
     */
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    })
  ],
  /**
   * https://next-auth.js.org/configuration/options#pages
   */
  pages: {
    /**
     * The sign in page
     */
    signIn: "/signin"

    /**
     * A sign out confirmation page (optional)
     */
    // signOut: '/auth/signout',

    /**
     * The error page to display during auth errors.
     * Error code passed in query string as `?error=`
     */
    // error: "/auth/error",

    /**
     * The "check your email" page displayed for magic links.
     */
    // verifyRequest: "/auth/check-email"

    /**
     * New users will be directed here on first sign in (optional)
     */
    // newUser: '/auth/new-user'
  },
  /**
   * https://next-auth.js.org/configuration/options#secret
   */
  secret: env.NEXTAUTH_SECRET,
  /**
   * https://next-auth.js.org/configuration/options#session
   */
  session: {
    strategy: "jwt"
  },
  /**
   * https://next-auth.js.org/configuration/options#callbacks
   */
  callbacks: {
    /**
     * Use the signIn() callback to control if a user is allowed to sign in.
     *
     * https://next-auth.js.org/configuration/callbacks#sign-in-callback
     */
    async signIn(/* { user, account, profile, email, credentials } */) {
      return Promise.resolve(true)
    },
    /**
     * The redirect callback is called anytime the user is redirected to a
     * callback URL (e.g. on signin or signout).
     *
     * https://next-auth.js.org/configuration/callbacks#redirect-callback
     */
    async redirect({ baseUrl /*, url */ }) {
      return Promise.resolve(baseUrl)
    },
    /**
     * The session callback is called whenever a session is checked. By
     * default, only a subset of the token is returned for increased security.
     * If you want to make something available you added to the token (like
     * access_token and user.id from above) via the jwt() callback, you have
     * to explicitly forward it here to make it available to the client.
     *
     * https://next-auth.js.org/configuration/callbacks#session-callback
     */
    async session({ session, token /*, user */ }) {
      if (session?.user) {
        session.user.id = token.userId
      }

      return Promise.resolve(session)
    },
    /**
     * This callback is called whenever a JSON Web Token is created (i.e. at
     * sign in) or updated (i.e whenever a session is accessed in the client).
     * The returned value will be encrypted, and it is stored in a cookie.
     *
     * https://next-auth.js.org/configuration/callbacks#jwt-callback
     */
    async jwt({ token, user /*, account, profile, trigger */ }) {
      if (user) {
        token.userId = user.id
        token.email = user.email
      }

      return Promise.resolve(token)
    }
  }
}
