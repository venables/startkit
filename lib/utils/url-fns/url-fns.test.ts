import { describe, expect, test } from "vitest"

import { env } from "@/env"

import { appHost, fullURL } from "./url-fns"

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

describe("fullURL()", () => {
  test("returns a full URL by appending the path to the host", () => {
    const oldHost = env.NEXT_PUBLIC_HOST

    // @ts-expect-error - env vars are readonly
    env.NEXT_PUBLIC_HOST = "https://example.com"
    expect(fullURL("/path").toString()).toBe("https://example.com/path")

    // @ts-expect-error - env vars are readonly
    env.NEXT_PUBLIC_HOST = oldHost
  })
})
