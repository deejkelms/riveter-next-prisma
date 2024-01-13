import RiveterLogo from '@/public/svgs/RiveterLogo.svg'
import styles from './page.module.css'
import LeadForm from './components/leadForm/LeadForm'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Box sx={{marginTop: {xs: '124px', md: '0'}}}> */}
      <RiveterLogo fill="#000" />
      <h1 className={styles.comingSoon}>Coming Soon</h1>

      <p>We are working hard to bring you an amazing experience!</p>
      <LeadForm />
      {/* </Box> */}
    </main>
  )
}
