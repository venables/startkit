import { auth } from "@/auth"
import { ThemePickerProvider } from "@/components/theme-picker/theme-picker-provider"
import { redirect } from "next/navigation"
import type { PropsWithChildren } from "react"

export const runtime = "edge"

async function getData() {
  const session = await auth()

  if (session) {
    redirect("/")
  }
}

export default async function AuthLayout({ children }: PropsWithChildren) {
  await getData()

  return (
    <ThemePickerProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </ThemePickerProvider>
  )
}
