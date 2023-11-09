import { Resend } from "resend"

import { env } from "@/env"

export const emailClient = new Resend(env.RESEND_API_KEY)
