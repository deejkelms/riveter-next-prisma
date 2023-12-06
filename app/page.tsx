import { RiveterLogo } from '@/public/svgs/RiveterLogo'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <RiveterLogo fill="#fff" />
      <h1 className={styles.comingSoon}>Coming Soon</h1>

      <p>We are working hard to bring you an amazing experience!</p>
    </main>
  )
}
