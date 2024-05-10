import { appHost } from "./app-host"

/**
 * Build a URL for the given path
 *
 * @returns the URL for the given path
 */
export function fullURL(path = "", hostname = appHost()): URL {
  return new URL(path, hostname)
}
