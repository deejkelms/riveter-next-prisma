// import { prisma } from '@/lib/prisma'
import styles from './page.module.css'
import Footer from './ui/footer/Footer'
import Navbar from './ui/nav/Navbar'

export default async function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.center}>Homepage V1</div>
      <Footer />
    </main>
  )
}
