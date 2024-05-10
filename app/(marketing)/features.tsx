"use client"

import { CheckIcon } from "lucide-react"
import Link from "next/link"
import { useMemo } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { cls } from "@/lib/utils"

export function Features() {
  const FEATURES = useMemo(
    () => [
      { title: "Next 14", href: "https://nextjs.org" },
      { title: "100% on the Edge 🚀" },
      { title: "Bun Package Manager", href: "https://bun.sh" },
      { title: "Drizzle ORM", href: "https://orm.drizzle.team" },
      { title: "shadcn/ui", href: "https://ui.shadcn.com" },
      { title: "App Directory" },
      { title: "API Route Handlers" },
      { title: "Authentication (Email + OAuth)" },
      { title: "Typescript (Strict)" },
      { title: "Biome", href: "https://biomejs.dev" },
      { title: "TailwindCSS", href: "https://tailwindcss.com" },
      { title: "Radix UI", href: "https://www.radix-ui.com" },
      { title: "PostgreSQL" },
      { title: "Email via Postmark", href: "https://postmarkapp.com" },
      { title: "Vercel ready", href: "https://vercel.com" },
      { title: "Metadata SEO" },
      { title: "Geist Font", href: "https://vercel.com/font" },
      { title: "Lucide Icons", href: "https://lucide.dev" },
      { title: "Vitest", href: "https://vitest.dev" },
      { title: "Dark Mode" },
      {
        title: "Toasts",
        onClick: () =>
          toast("Wait. Toasts, too?", {
            description: "Yep! You can use them anywhere in your app."
          })
      },
      { title: "and much more..." }
    ],
    []
  )

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      {FEATURES.map(({ title, onClick, href }) => (
        <Button
          asChild={Boolean(href)}
          className={cls(
            "justify-start space-x-2 text-left underline-offset-8",
            onClick ?? href
              ? "cursor-pointer underline decoration-border decoration-dotted hover:decoration-foreground hover:decoration-solid"
              : "cursor-default hover:no-underline"
          )}
          key={title}
          onClick={onClick}
          variant="link"
        >
          {href ? (
            <Link href={href} rel="noreferrer" target="_blank">
              <CheckIcon className="size-4" />
              <span>{title}</span>
            </Link>
          ) : (
            <>
              <CheckIcon className="size-4" />
              <span>{title}</span>
            </>
          )}
        </Button>
      ))}
    </div>
  )
}
