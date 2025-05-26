import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingNavigation } from "@/components/floating-navigation"
import { ParticleBackground } from "@/components/particle-background"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Rishi Rohilla - Innovator",
  description: "Competitive Programmer, Innovative full-stack developer crafting digital experiences that push boundaries",
  keywords: ["Rishi Rohilla","Competitive Programmer", "Creative Developer", "Full Stack", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Rishi Rohilla" }],
  creator: "Rishi Rohilla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexchen.dev",
    title: "Rishi Rohilla - Innovator",
    description: "Innovative full-stack developer crafting digital experiences that push boundaries",
    siteName: "Rishi Rohilla Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rishi Rohilla Portfolio" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} ${orbitron.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="cyberpunk" enableSystem={false}>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <ParticleBackground />
            <CustomCursor />
            <FloatingNavigation />
            <main className="relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
