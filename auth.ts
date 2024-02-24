import NextAuth, { type DefaultSession } from "next-auth"

import authConfig from "./auth.config"

declare module "next-auth" {
  /**
   * Add additional attributes to the session object.
   */
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- This is a module augmentation
  interface Session {
    user?: {
      /** The user's id. */
      id: string
    } & DefaultSession["user"]
  }
}

/**
 *
 * All NextAuth config should be defined in `./auth.config.ts` to allow for us
 * to use a non-edge compliant database adapter if necessary.
 */
export const {
  handlers: { GET, POST },
  auth
} = NextAuth(authConfig)
