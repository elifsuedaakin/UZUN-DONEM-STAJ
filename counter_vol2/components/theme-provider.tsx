"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ 
  children, //uygulamanın bütün sayfalarını(sayacı,butonları vs.)temsil eder
  ...props //varsayılan ayarları(tema,sistem modu gibi)paket yapıp almamız için 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}