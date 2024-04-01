import {
  type NeonQueryFunction,
  neon,
  neonConfig
} from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import { env } from "@/env"

export const client = neon(env.DATABASE_URL) satisfies NeonQueryFunction<
  boolean,
  boolean
>
export const db = drizzle(client)
