import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'

import SessionProvider from './components/SessionProvider'
import Navbar from './components/nav/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Riveter',
  description: 'Trade App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {/* <Navbar /> uncomment locally*/}
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
