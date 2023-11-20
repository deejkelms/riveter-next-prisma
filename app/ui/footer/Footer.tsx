'use client'

import { Container } from '@mui/material'
import Copyright from '../copyright/Copyright'

// https://github.com/mui/material-ui/blob/v5.14.17/docs/data/material/getting-started/templates/pricing/Pricing.tsx
const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        py: [3, 3],
      }}
    >
      <Copyright />
    </Container>
  )
}

export default Footer
