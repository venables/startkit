import { env } from "@/env"
import type { Provider } from "next-auth/providers"
import { sendVerificationRequest } from "./send-verification-request"

/**
 * This defines an HTTP email provider, which is used for sending verification
 * requests to the user's email.
 *
 * @see {@link https://authjs.dev/guides/providers/email-http#introduction}
 */
export const HttpEmailProvider: Provider = {
  id: "http-email",
  type: "email",
  name: "HTTP Email",
  from: env.EMAIL_FROM,
  maxAge: 24 * 60 * 60,
  options: {},
  sendVerificationRequest
}
