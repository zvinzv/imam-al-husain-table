import { IBM_Plex_Sans_Arabic, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/context/ThemeProvider'
import { ReturnCookeisServer } from '@/components/returnCooke'
const inter = IBM_Plex_Sans_Arabic({ subsets: ['latin'], weight: ['200'], variable: "--font-ar" })
const inter2 = Montserrat({ subsets: ['latin'],weight: ["300", "600"], variable:"--font-en" })


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir='rtl'>
      <body className={`${inter2.variable} ${inter.variable} `}>
        <ThemeProvider old={ReturnCookeisServer("darkMode")}>
              <div className='text_ar dark:text-white text-black bg-zinc-300 dark:bg-zinc-900 transition-colors font-bold theme2'>
                <Navigation> 
                  {children}
                </Navigation>
              </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
