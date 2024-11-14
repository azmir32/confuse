// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/app/components/Header/Header'
import { Markazi_Text } from 'next/font/google'

// Load Markazi Text
const markaziText = Markazi_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-markazi',
})

export const metadata: Metadata = {
  title: 'Leaps',
  description: 'Help you Leaps FORWARD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={markaziText.variable}>
      <body className="bg-white dark:bg-gray-900 font-body">
        <Header />
        {children}
      </body>
    </html>
  )
}