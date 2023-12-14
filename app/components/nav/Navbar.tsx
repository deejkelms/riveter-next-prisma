'use client'

import { RiveterLogo } from '@/public/svgs/RiveterLogo'
import styles from './nav.module.css'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

type User = {
  email: string
  role: string
}

type Props = {
  loggedInUser?: User
}

function AuthButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <Button
          // variant="outlined"
          sx={{ textTransform: 'none', my: 1, mx: 1.5 }}
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Button
        // variant="outlined"
        sx={{ textTransform: 'none', my: 1, mx: 1.5 }}
        onClick={() => signIn()}
      >
        Sign In
      </Button>
    </>
  )
}

// https://github.com/mui/material-ui/blob/v5.14.17/docs/data/material/getting-started/templates/pricing/Pricing.tsx
const Navbar = (props: Props) => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        background: 'black',
        color: 'white',
        borderBottom: '1px solid white',
        // borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          color="inherit"
          noWrap
          sx={{ marginRight: '1rem', flexGrow: 1 }}
        >
          Riveter
          {/* <RiveterLogo fill="#000000" /> */}
        </Typography>

        {/* <nav className={styles.navLinks}>
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
        </nav> */}

        {/* <Link href="/login">
          <Button
            variant="outlined"
            sx={{ textTransform: 'none', my: 1, mx: 1.5 }}
          >
            Sign Up
          </Button>
        </Link> */}
        <AuthButton />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
