import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./providers";
import Navbar from '@/components/Navbar';
import localFont from "next/font/local";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] })
const acorn = localFont({
  src: "../../public/font/acorn-8.ttf",
  variable: "--font-acorn",
});

export const metadata = {
  title: 'Genggam Makna | AI-Powered SIBI Hand Sign Translator',
  description: 'Genggam Makna is an AI-powered platform designed to bridge communication gaps by translating SIBI (Indonesian Sign Language) hand signs into the alphabet. Empowering accessibility and fostering inclusivity for a more connected world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${acorn.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className='bg-gradient-to-r from-blue-200 from-10% via-blue-50 via-50% to-blue-200 to-90% min-h-screen'>
            <Navbar />
            <div className='rounded-t-4xl overflow-hidden bg-white shadow-[0_-5px_60px_-15px_rgba(0,0,0,0.3)] min-h-[calc(100vh-_97px)] bg-gradient-to-br from-blue-100 from-10% via-blue-50 via-50% to-blue-100 to-90%'>
              {children}
            </div>
          </div>
          <Toaster position="bottom-right" richColors />
        </Providers>
      </body>
    </html>
  )
}
