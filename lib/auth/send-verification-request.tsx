import { eq } from "drizzle-orm"
import { render } from "jsx-email"
import { type EmailConfig } from "next-auth/providers"

import { usersTable } from "@/drizzle/schema"
import { Template as SignInEmail } from "@/emails/signin-email"
import { env } from "@/env"
import { db } from "@/lib/db"
import { sendEmail } from "@/lib/email/send-email"

type SendVerificationRequestParams = Parameters<
  EmailConfig["sendVerificationRequest"]
>[0]

export async function sendVerificationRequest({
  identifier: email,
  url
}: SendVerificationRequestParams) {
  const users = await db
    .select({
      emailVerified: usersTable.emailVerified
    })
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1)

  const user = users[0]

  const template = (
    <SignInEmail
      emailAddress={email}
      existingUser={Boolean(user?.emailVerified)}
      url={url}
    />
  )
  const html = await render(template, { minify: false })
  const text = await render(template, { plainText: true, minify: false })

  await sendEmail({
    to: email,
    from: env.EMAIL_FROM,
    headers: {
      "X-Entity-Ref-ID": Date.now().toString()
    },
    subject: user?.emailVerified
      ? "Sign in to StartKit"
      : "Welcome to StartKit!",
    html,
    text
  })
}
