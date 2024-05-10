"use client"

import { ThemeProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

type Props = ThemeProviderProps

export function ThemePickerProvider(props: Props) {
  return <ThemeProvider {...props} />
}
