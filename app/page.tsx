import { RiveterLogo } from '@/public/svgs/RiveterLogo'
import styles from './page.module.css'
import LeadForm from './components/leadForm/LeadForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <RiveterLogo fill="#000" />
      <h1 className={styles.comingSoon}>Coming Soon</h1>

      <p>We are working hard to bring you an amazing experience!</p>
      <LeadForm />
    </main>
  )
}
