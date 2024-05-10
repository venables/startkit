import { env } from "@/env"

/**
 * Adds a small indicator to the bottom left of the screen that shows the current
 * breakpoint. This is useful for debugging responsive styles.
 */
export function TailwindIndicator() {
  if (env.NODE_ENV === "production") {
    return null
  }

  return (
    <div className="fixed bottom-1 left-1 z-50 flex size-6 items-center justify-center rounded-full bg-foreground p-3 font-mono text-background text-xs">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block 2xl:hidden lg:hidden md:hidden xl:hidden">
        sm
      </div>
      <div className="hidden md:block 2xl:hidden lg:hidden xl:hidden">md</div>
      <div className="hidden lg:block 2xl:hidden xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}
