import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Roboto } from 'next/font/google'

import SessionProvider from './components/SessionProvider'
// import Navbar from './components/nav/Navbar'
import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={roboto.className}>
        <SessionProvider session={session}>
          {/* <Navbar /> uncomment locally*/}
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
