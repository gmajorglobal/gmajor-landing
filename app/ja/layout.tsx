import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'GMAJOR - グローバル展開',
  description: '日本、アメリカ、中国、そして世界各国の企業と直接ビジネス交流を体験 ― 完全無料',
  keywords: 'GMAJOR、グローバル展開、日本、アメリカ、中国、国際市場、企業、貿易、ビジネス交流、プラットフォーム',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function JapaneseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
} 