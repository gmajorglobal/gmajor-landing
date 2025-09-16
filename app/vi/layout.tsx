import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'GMAJOR - Vươn ra thế giới',
  description: 'Trải nghiệm giao thương trực tiếp với các doanh nghiệp từ Nhật Bản, Mỹ, Trung Quốc và khắp nơi trên thế giới - HOÀN TOÀN MIỄN PHÍ',
  keywords: 'GMAJOR, giao thương, doanh nghiệp, Nhật Bản, Mỹ, Trung Quốc, thị trường quốc tế, B2B, kết nối doanh nghiệp',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function VietnameseLayout({
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