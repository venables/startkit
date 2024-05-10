import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from "jsx-email"
import { siteConfig } from "../config/site"

export type SignInEmailProps = {
  existingUser?: boolean
  emailAddress: string
  url: string
}

export function Template({
  url,
  emailAddress,
  existingUser = false
}: SignInEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        {existingUser
          ? `Sign in to ${siteConfig.name}`
          : `Welcome to ${siteConfig.name}!`}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={headingTop}>{siteConfig.name}</Heading>
          <Heading style={headingPrimary}>
            <span>{existingUser ? "Sign in" : "Welcome"} to </span>
            <span style={bold}>{siteConfig.name}</span>
          </Heading>
          <Text style={paragraph}>
            {existingUser ? (
              <>
                Welcome back to {siteConfig.name}. Tap this button to sign in to
                your account:
              </>
            ) : (
              <>
                Thanks for trying {siteConfig.name}. We&apos;re thrilled to have
                you on board. To get started, tap this button to verify your
                email address:
              </>
            )}
          </Text>
          <Section style={buttonSection}>
            <Button href={url} style={button}>
              {existingUser ? "Sign in to my account" : "Verify my email"}
            </Button>
          </Section>
          <Hr style={separator} />
          <Text style={footer}>
            This link was intended for <span style={black}>{emailAddress}</span>
            . If you were not expecting this link, you can ignore this email. If
            you are concerned about your account&apos;s safety, please reply to
            this email to get in touch with us.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const body = {
  backgroundColor: "#ffffff",
  fontFamily:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  margin: "auto"
}

const container = {
  borderRadius: "0.25rem",
  borderWidth: "1px",
  borderStyle: "solid",
  width: "465px",
  borderColor: "#e4e4e7", // zinc-200
  padding: "20px"
}

const headingTop = {
  color: "#a1a1aa", // zinc-400
  padding: "0",
  marginLeft: "0",
  marginRight: "0",
  fontWeight: 700,
  fontSize: "12px",
  letterSpacing: "0.1em",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  marginBottom: "10px",
  marginTop: "32px"
}

const headingPrimary = {
  color: "#000000",
  padding: "0",
  marginLeft: "0",
  marginRight: "0",
  marginTop: "0",
  fontWeight: 400,
  textAlign: "center" as const,
  fontSize: "24px",
  marginBottom: "30px"
}

const bold = {
  fontWeight: 700
}

const black = {
  color: "#000000"
}

const paragraph = {
  color: "#000000",
  fontSize: "14px",
  lineHeight: "24px"
}

const buttonSection = {
  marginVertical: "32px",
  textAlign: "center" as const
}

const button = {
  textAlign: "center" as const,
  fontSize: "12px",
  fontWeight: 600,
  textDecoration: "none",
  color: "#ffffff",
  backgroundColor: "#000000",
  borderRadius: "4px",
  padding: "12px 20px",
  cursor: "pointer"
}

const separator = {
  margin: "26px 0",
  width: "100%",
  border: 0,
  borderTop: "1px solid #e4e4e7" // zinc-200
}

const footer = {
  fontSize: "12px",
  lineHeight: "24px",
  color: "#71717a" // zinc-500
}
