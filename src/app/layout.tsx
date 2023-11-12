import { IBM_Plex_Sans_Arabic, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
const inter = IBM_Plex_Sans_Arabic({ subsets: ['latin'], weight: ['200'], variable: "--font-ar" })
const inter2 = Montserrat({ subsets: ['latin'],weight: ["300", "600"], variable:"--font-en" })


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir='rtl'>
      <body className={`${inter2.variable} ${inter.variable}`}>
        <div className='text_ar'>
        <Navigation />
        {children}
        </div>
      </body>
    </html>
  )
}
