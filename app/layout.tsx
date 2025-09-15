import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GMAJOR - グローバル展開',
  description: '日本、アメリカ、中国、そして世界各国の企業と直接ビジネス交流を体験 ― 完全無料',
  keywords: 'GMAJORは、日本、アメリカ、中国をはじめとする国際市場の企業と貿易・ビジネス交流をつなぐプラットフォームです。',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
} 