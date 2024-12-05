import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Genggam Makna | AI-Powered SIBI Hand Sign Translator',
  description: 'Genggam Makna is an AI-powered platform designed to bridge communication gaps by translating SIBI (Indonesian Sign Language) hand signs into the alphabet. Empowering accessibility and fostering inclusivity for a more connected world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
