import type { Metadata } from "next"
import Link from "next/link"

import { UserAuthForm } from "@/components/auth/user-auth-form"
import { Logo } from "@/components/icons/brand/logo"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config"

export const metadata: Metadata = {
  title: `Sign in to ${siteConfig.name}`,
  description: `Sign in to your ${siteConfig.name} account`,
  openGraph: {
    title: `Sign in to ${siteConfig.name}`,
    description: `Sign in to your ${siteConfig.name} account`
  }
}

export default function SigninPage() {
  return (
    <div className="container relative grid min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="absolute top-4 flex w-full flex-row justify-between px-4 md:top-8">
        <Button
          asChild
          className="z-20 flex items-center bg-transparent font-medium text-lg text-primary transition-colors hover:bg-accent lg:hover:bg-primary-foreground/10 lg:hover:text-primary-foreground lg:text-primary-foreground"
        >
          <Link href="/">
            <Logo className="mr-2 size-6" />
            {siteConfig.name}
          </Link>
        </Button>

        <Button asChild variant="ghost">
          <Link href="/register">Sign up</Link>
        </Button>
      </div>

      <div className="relative hidden h-full flex-col bg-muted p-10 text-primary-foreground lg:flex dark:border-r">
        <div className="absolute inset-0 h-full bg-primary" />

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">
              Welcome back
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter your email below to sign in to your account
            </p>
          </div>

          <UserAuthForm />

          <p className="px-8 text-center text-muted-foreground text-sm">
            Already have an account?{" "}
            <Button
              asChild
              className="px-0 text-muted-foreground underline underline-offset-4 hover:text-primary"
              variant="link"
            >
              <Link href="/signin">Sign in here</Link>
            </Button>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
