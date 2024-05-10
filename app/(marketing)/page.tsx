import { GithubIcon } from "lucide-react"
import type { Metadata } from "next"
import { Permanent_Marker as PermanentMarker } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config"
import { cls } from "@/lib/utils"

import { Features } from "./features"

const handwriting = PermanentMarker({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A sane way to start your next next project (on the edge)",
  description:
    "Clean, understandable code. The latest best practices. Best-in-class open source libraries. And 100% on the edge.",
  openGraph: {
    title: "A sane way to start your next next project (on the edge)",
    description:
      "Clean, understandable code. The latest best practices. Best-in-class open source libraries. And 100% on the edge."
  }
}

export default function Home() {
  return (
    <>
      <section className="mx-auto mt-12 flex size-full max-w-4xl grow flex-col sm:flex-row sm:items-center">
        <div className="flex flex-1 flex-col items-center text-center">
          <Badge className="font-bold sm:text-lg" variant="secondary">
            {siteConfig.name}
          </Badge>
          <h1 className="relative mb-5 text-center font-extrabold text-4xl leading-none tracking-tight md:text-6xl">
            A sane way to start your next{" "}
            <Button
              asChild
              className="p-0 font-extrabold text-4xl text-muted-foreground leading-none tracking-tight md:text-6xl"
              variant="ghost"
            >
              <Link href="https://nextjs.org/" rel="noreferrer" target="_blank">
                next
              </Link>
            </Button>{" "}
            project.
            <span
              className={cls(
                handwriting.className,
                "-mb-6 -rotate-6 bottom-0 block text-2xl text-red-500 md:absolute md:right-0 md:text-4xl"
              )}
            >
              ^ on the edge
            </span>
          </h1>

          <h2 className="mt-6 pt-2 pb-6">
            Clean, understandable code. The latest best practices. Best-in-class
            open source libraries.{" "}
            <span className="font-bold">And 100% on the edge.</span>
          </h2>

          <Button
            asChild
            className="font-semibold text-lg tracking-tighter"
            size="lg"
            variant="secondary"
          >
            <Link
              href={siteConfig.links.github}
              rel="noreferrer"
              target="_blank"
            >
              Get started
            </Link>
          </Button>
        </div>

        <div className="relative h-96 sm:flex sm:flex-1 sm:items-start">
          <Image
            alt="A sane way to start your next next project"
            className="dark:hidden"
            fill
            priority
            src="/images/home/hero-light.svg"
          />
          <Image
            alt="A sane way to start your next next project"
            className="hidden dark:block"
            fill
            priority
            src="/images/home/hero-dark.svg"
          />
        </div>
      </section>

      <section className="mt-12 flex h-full grow flex-col items-center justify-center space-y-12 px-4 sm:px-0">
        <h2 className="font-bold text-3xl">What&apos;s included</h2>
        <Features />

        <div className="flex flex-col items-center justify-center space-y-2">
          <Button asChild variant="secondary">
            <Link
              href={siteConfig.links.github}
              rel="noreferrer"
              target="_blank"
            >
              <GithubIcon className="mr-2 size-4" />
              <span>
                View Source on <span className="font-bold">GitHub</span>
              </span>
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
