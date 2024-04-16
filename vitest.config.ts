import react from "@vitejs/plugin-react"
import path from "node:path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./")
    }
  }
})
