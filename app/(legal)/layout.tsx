import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"
import type { PropsWithChildren } from "react"

import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function LegalLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <Button asChild variant="ghost">
          <Link href="/">
            <ChevronLeftIcon className="mr-2 size-4" />
            <span>Back</span>
          </Link>
        </Button>
      </div>

      <main className="container mx-auto flex grow flex-col items-center justify-start p-6">
        {children}
      </main>

      <Footer />
    </div>
  )
}
