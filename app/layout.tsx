import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin", "cyrillic"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TinyEbikePro - E-Bike Accessories",
  description: "The future of movement is in your hands. Accessories for compact e-bikes that make your ride brighter.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable} antialiased`}>
        <Navigation />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
