import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import CustomCursor from '@/components/CustomCursor'
import BackToTop from "@/components/BackToTop";
import ScrollToTopOnLoad from "@/components/ScrollToTopOnLoad";
import AOSInitializer from '@/components/AOSInitializer';
import './globals.css'
import { Navbar } from '@/components/navbar'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Durva Kadam - Fullstack Developer',
  description: 'I design and build products that deliver real impact. Full Stack Developer & Designer based in India.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans antialiased cursor-none relative`}>
        {/* Grid Background - Dark Mode */}
        <div className="fixed inset-0 -z-10 h-screen w-screen bg-background bg-[linear-gradient(to_right,rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:6rem_4rem] pointer-events-none dark:block hidden overflow-hidden" />
        {/* Grid Background - Light Mode */}
        <div className="fixed inset-0 -z-10 h-screen w-screen bg-background bg-[linear-gradient(to_right,rgba(0,0,0,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.07)_1px,transparent_1px)] bg-[size:6rem_4rem] pointer-events-none dark:hidden overflow-hidden" />
        <AOSInitializer />
        <CustomCursor />
        <ScrollToTopOnLoad />
        <BackToTop />
        <div className="flex flex-col items-center w-full">
          <Navbar />
          <main className="w-full max-w-screen-xl px-4">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
