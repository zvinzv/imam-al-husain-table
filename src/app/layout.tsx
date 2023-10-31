import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
const inter = IBM_Plex_Sans_Arabic({ subsets: ['latin'], weight: ['200'] })


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir='rtl'>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
