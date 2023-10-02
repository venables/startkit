import { redirect } from "next/navigation"
import { type ReactNode } from "react"

import { auth } from "@/auth"
import { ThemePickerProvider } from "@/components/theme-picker/theme-picker-provider"

async function getData() {
  const session = await auth()

  if (session) {
    redirect("/")
  }
}

interface Props {
  children?: ReactNode
}

export default async function AuthLayout({ children }: Props) {
  await getData()

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
      <ThemePickerProvider />
    </>
  )
}
