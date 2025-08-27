import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GMAJOR - Vươn ra thế giới',
  description: 'Trải nghiệm giao thương trực tiếp với các doanh nghiệp từ Nhật Bản, Mỹ, Trung Quốc và khắp nơi trên thế giới - HOÀN TOÀN MIỄN PHÍ',
  keywords: 'GMAJOR, giao thương, doanh nghiệp, Nhật Bản, Mỹ, Trung Quốc, thị trường quốc tế',
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 