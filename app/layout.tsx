import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'manudev',
  description: 'Manuel Guirado Baeza - Backend Developer',
  generator: ' manudev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
