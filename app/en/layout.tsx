import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'GMAJOR - Global Expansion',
  description: 'Experience direct business exchanges with companies from Japan, USA, China and around the world - COMPLETELY FREE',
  keywords: 'GMAJOR, global expansion, Japan, USA, China, international market, business, trade, B2B platform, business connection',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
} 