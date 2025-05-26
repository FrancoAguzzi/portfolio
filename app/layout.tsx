import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Franco Aguzzi - Senior Product Engineer & AI/ML Integrator",
  description:
    "Senior Product Engineer specializing in AI/ML integration, Web3 solutions, and data-driven growth. 5+ years experience with TypeScript, React, and blockchain technologies.",
  keywords:
    "Franco Aguzzi, Senior Product Engineer, AI/ML Integrator, Web3, TypeScript, React, Blockchain, DeFi, Software Architect",
  authors: [{ name: "Franco Aguzzi" }],
  openGraph: {
    title: "Franco Aguzzi - Senior Product Engineer & AI/ML Integrator",
    description: "Senior Product Engineer specializing in AI/ML integration, Web3 solutions, and data-driven growth.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
