import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sergio Iván Chávez Hernández - Portfolio',
  description: 'Personal portfolio website showcasing my projects, skills, and experience as a software developer.',
  keywords: ['portfolio', 'developer', 'software', 'web development', 'Sergio Chávez'],
  authors: [{ name: 'Sergio Iván Chávez Hernández' }],
  openGraph: {
    title: 'Sergio Iván Chávez Hernández - Portfolio',
    description: 'Personal portfolio website showcasing my projects, skills, and experience as a software developer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
