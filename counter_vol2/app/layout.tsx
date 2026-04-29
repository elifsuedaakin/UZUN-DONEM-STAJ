import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] }); // yazı tipimizi latin alfabesine göre ayarlıyoruz 

export const metadata: Metadata = {
  title: "Counter Vol 2", // tarayıcı sekmesınde yazacak isim 
  description: "Zustand ve Shadcn ile Gelişmiş Sayaç", // google aramalarında cıkacak acıklama 
};

export default function RootLayout({
  children, //page içindeki her şey bu childrenın içine gidecek
}: {
  children: React.ReactNode;
}) { 
  return (
    // suppressHydrationWarning: Temalar arası geçişte hata almamanı sağlar, saat çakışşması için 
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}> 
        <ThemeProvider
          attribute="class" //ışık modunu sınıflarla yönetıyrouz 
          defaultTheme="system" //kullanıcı bılgısayarındakı tema neyse o tema ıle acılamsı ıcın 
          enableSystem
          disableTransitionOnChange
        >
          {children} 
        </ThemeProvider>
      </body>
    </html>
  ); 
} 