import { type NeonQueryFunction, neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import { env } from "@/env"

const logger = env.NODE_ENV === "development"
export const client = neon(env.DATABASE_URL) satisfies NeonQueryFunction<
  boolean,
  boolean
>
export const db = drizzle(client, { logger })
