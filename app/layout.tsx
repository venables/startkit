import "./globals.css"
import { TailwindIndicator } from "@/components/debug/tailwind-indicator"
import { Analytics } from "@/components/layout/analytics"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config/site"
import { cls } from "@/lib/utils/cls"
import { fullURL } from "@/lib/utils/url-fns/full-url"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata, Viewport } from "next"
import type { PropsWithChildren } from "react"

export const metadata: Metadata = {
  metadataBase: fullURL(),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ]
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={cls(
        GeistSans.variable,
        GeistMono.variable,
        "font-sans antialiased"
      )}
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-screen bg-background text-card-foreground">
        {children}
        <Analytics />
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  )
}
