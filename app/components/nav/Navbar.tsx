'use client'

import RiveterLogo from '../../../public/svgs/RiveterLogo.svg'
import styles from './nav.module.css'
import { AppBar, Button, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Divider } from '@mui/material'
import Link from 'next/link'
import { signIn, signOut, useSession} from 'next-auth/react'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

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

// https://mui.com/material-ui/api/app-bar/
export const Navbar = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{background: '#f8f8f8'}}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <RiveterLogo  width="64px" height="64px" fill="#000" />
        {/* nav items */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '40px', marginLeft: '48px', fontWeight: 500, fontSize: '16px' }}>
          <Link color="text.primary" href="#">
            EMPLOYERS
          </Link>
          <Link color="text.primary" href="#">
            JOB SEEKERS
          </Link>
          <Link color="text.primary" href="#">
            ABOUT US
          </Link>
        </Box>
        {/* Auth buttons TO-DO:@christine maybe extract this or add avatar button with login/signup as menu options when clicked. */}
        <Box sx={{display: {xs: 'none', md: 'flex'}, my: 1, mx: 1.5, color: '#000', fontWeight: 500, marginRight: '48px' }}><Link href="#">LOGIN</Link></Box>
        <Button
          variant="outlined"
          sx={{display: {xs: 'none', md: 'flex'}, my: 1, mx: 1.5, color: 'white', background: '#0265DC' }}
        >
          SIGN UP
        </Button>

        {/* collapsble menu for mobile */}
        <Box sx={{display: {cs: 'flex', md: 'none'}}}>
          <IconButton sx={{color: '#000'}} onClick={handleOpenNavMenu}><MenuIcon sx={{fontSize: "32px"}} /></IconButton>
          <Menu anchorEl={anchorElNav} open={!!anchorElNav} onClose={handleClose}>
            <MenuItem key="job-seekers" onClick={() => null}>EMPLOYEES</MenuItem>
            <MenuItem key="job-seekers" onClick={() => null}>JOB SEEKERS</MenuItem>
            <MenuItem key="job-seekers" onClick={() => null}>ABOUT US</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem key="job-seekers" onClick={() => null}>LOG IN</MenuItem>
            <MenuItem key="job-seekers" onClick={() => null}>SIGN UP</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
