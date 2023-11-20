'use client'

import styles from './nav.module.css'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

type User = {
  email: string
  role: string
}

type Props = {
  loggedInUser?: User
}

// https://github.com/mui/material-ui/blob/v5.14.17/docs/data/material/getting-started/templates/pricing/Pricing.tsx
const Navbar = (props: Props) => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          color="inherit"
          noWrap
          sx={{ marginRight: '1rem' }}
        >
          Riveter
          {/* <Image
            src="/riveter.svg"
            alt="Riveter Logo"
            width={40}
            height={40}
            priority
          /> */}
        </Typography>

        <nav className={styles.navLinks}>
          <Link color="text.primary" href="#">
            For Job Seekers
          </Link>
          <Link color="text.primary" href="#">
            For Businesses
          </Link>
          <Link color="text.primary" href="#">
            Why Now
          </Link>
          <Link color="text.primary" href="#">
            About
          </Link>
        </nav>

        <Link href="/login">
          <Button
            variant="outlined"
            sx={{ textTransform: 'none', my: 1, mx: 1.5 }}
          >
            Sign Up
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
