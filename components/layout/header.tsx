import { auth } from "@/auth"
import { Logo } from "@/components/icons/brand/logo"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { GithubIcon } from "lucide-react"
import Link from "next/link"
import { UserNav } from "./header/user-nav"

export async function Header() {
  const session = await auth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-2 md:px-8">
        <div className="flex gap-6 md:gap-10">
          <Button
            asChild
            className="group flex items-center space-x-2 text-primary transition-colors hover:animate-pulse hover:bg-transparent hover:text-primary/80"
            variant="ghost"
          >
            <Link href="/">
              <Logo className="transition-transform" />
              <span className="hidden font-bold text-lg sm:inline-block">
                {siteConfig.name}
              </span>
            </Link>
          </Button>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <Button asChild variant="ghost">
            <Link href={siteConfig.links.github}>
              <GithubIcon />
            </Link>
          </Button>

          {session?.user ? (
            <UserNav user={session.user} />
          ) : (
            <Button asChild className="px-4" size="sm">
              <Link href="/api/auth/signin">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
