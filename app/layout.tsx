import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Roboto } from 'next/font/google'

import SessionProvider from './components/SessionProvider'
import {Navbar} from './components/nav/Navbar'
import './globals.css'
import {Footer} from './components/footer/Footer'

const roboto = Roboto({
  weight: ['300', '400', '500'],
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
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
