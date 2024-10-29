"use client"
import './../../src/app/globals.css'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useState, useEffect } from "react"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null 

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
