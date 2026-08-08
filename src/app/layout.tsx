import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Go Beyond Degree | Build Real Products',
  description:
    'Go Beyond Degree is a builder fellowship where ambitious students collaborate, build, ship products, and grow their careers.',
  applicationName: 'Go Beyond Degree',
  keywords: ['builder fellowship', 'product building', 'student careers', 'AI programs'],
  openGraph: {
    title: 'Go Beyond Degree | Build Real Products',
    description: 'Learn, build, ship, and grow with a community of ambitious builders.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#fbfaf8',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
