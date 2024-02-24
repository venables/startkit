import { eq } from "drizzle-orm"
import { type EmailConfig } from "next-auth/providers"

import { usersTable } from "@/drizzle/schema"
import SignInEmail from "@/emails/signin-email"
import { env } from "@/env"
import { db } from "@/lib/db"
import { emailClient } from "@/lib/email"

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

  await emailClient().emails.send({
    from: env.EMAIL_FROM,
    to: email,
    headers: {
      "X-Entity-Ref-ID": Date.now().toString()
    },
    subject: user?.emailVerified
      ? "Sign in to StartKit"
      : "Welcome to StartKit!",
    react: (
      <SignInEmail
        emailAddress={email}
        existingUser={Boolean(user?.emailVerified)}
        url={url}
      />
    )
  })
}
