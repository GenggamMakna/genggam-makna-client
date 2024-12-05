import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./providers";
import Navbar from '@/components/Navbar';
import localFont from "next/font/local";

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
    <html lang="en" className={`${acorn.variable}`}>
      <body className={inter.className}>
        <Providers>
          <div className='bg-gradient-to-r from-blue-100 from-10% via-blue-50 via-50% to-blue-100 to-90% min-h-screen'>
            <Navbar/>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
