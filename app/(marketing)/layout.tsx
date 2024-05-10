import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import type { PropsWithChildren } from "react"

export const runtime = "edge"

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4">{children}</main>
      <Footer />
    </div>
  )
}
