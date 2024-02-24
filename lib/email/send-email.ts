import { env } from "@/env"

export type SendEmailParams = {
  to: string
  from: string
  subject: string
  html?: string
  text?: string
  headers?: Record<string, string>
}

/**
 * Sends an email using Postmark's API.
 *
 * @see {@link https://postmarkapp.com/developer/user-guide/send-email-with-api}
 */
export async function sendEmail({
  to,
  from,
  subject,
  html,
  text,
  headers
}: SendEmailParams) {
  const response = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": env.POSTMARK_API_KEY
    },
    body: JSON.stringify({
      From: from,
      To: to,
      Subject: subject,
      HtmlBody: html,
      TextBody: text,
      MessageStream: "outbound",
      Headers:
        headers &&
        Object.entries(headers).map(([key, value]) => ({
          Name: key,
          Value: value
        }))
    })
  })

  if (!response.ok) {
    throw new Error(`Email send failed: ${response.status}`)
  }

  return response.json()
}
