import { env } from "@/env"
import { describe, expect, test } from "vitest"
import { appHost } from "./app-host"

describe("appHost()", () => {
  test("returns the app host", () => {
    const oldHost = env.NEXT_PUBLIC_HOST

    // @ts-expect-error - env vars are readonly
    env.NEXT_PUBLIC_HOST = "https://example.com"
    expect(appHost()).toBe("https://example.com")

    // @ts-expect-error - env vars are readonly
    env.NEXT_PUBLIC_HOST = oldHost
  })

  test("can exclude the protocol", () => {
    const oldHost = env.NEXT_PUBLIC_HOST

    // @ts-expect-error - env vars are readonly
    env.NEXT_PUBLIC_HOST = "https://example.com"
    expect(appHost(false)).toBe("example.com")

    // @ts-expect-error - env vars are readonly
    env.NEXT_PUBLIC_HOST = oldHost
  })
})
