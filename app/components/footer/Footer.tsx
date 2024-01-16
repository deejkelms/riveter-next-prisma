import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import RiveterLogo from '../../../public/svgs/RiveterLogo.svg'

// https://github.com/mui/material-ui/blob/v5.14.17/docs/data/material/getting-started/templates/pricing/Pricing.tsx
export const Footer = () => {
  // TODO: find ways to reduce the duplication here.
  // maybe make an array of links that we can map through.
  return (
    // desktop styles
    <Box sx={{marginTop: {xs: '72px', md: '104px'}}}>
      <Box sx={{display: { xs: 'none', md: 'flex' }, position: 'sticky', bottom: '0', background: '#B5DEFF', padding: '28px 32px', flexDirection: 'row', gap: '40px', lineHeight: '24px'}}>
        <RiveterLogo height="116px" width="116px" fill="#000" />
        <Box sx={{display: 'flex', fontWeight: 500, flexDirection: 'column', gap: '8px', paddingTop: '28px'}}>
          <Link color="text.primary" href="#">FAQS</Link>
          <Link color="text.primary" href="#"> NEWSLETTER</Link>
        </Box>
        <Box sx={{display: 'flex', fontWeight: 500, flexDirection: 'column', gap: '8px',  paddingRight: '20px', paddingTop: '28px', paddingLeft: '20px'}}>
          <Link color="text.primary" href="#"> INSTAGRAM</Link>
          <Link color="text.primary" href="#"> FACEBOOK</Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: 'auto', marginRight: '40px'}}>
          <h3 style={{fontSize: '20px', fontWeight: 500, lineHeight: '32px'}}>Contact us!</h3>
          <p style={{fontSize: '16px'}}>info@rivetertrade.com</p>
          <p style={{fontSize: '16px'}}>+1 (000) 000-0000</p>
        </Box>
      </Box>
      {/* mobile styles (just temp placeholder for now) */}
      <Box sx={{display: {xs: 'flex', md: 'none'}, background: '#B5DEFF', flexDirection: 'column', padding: '20px 0'}}>
        <Box sx={{fontWeight: 500, fontSize: '12px', display: 'flex',  gap: '8px', margin: '0 auto'}}>
          <Link color="text.primary" href="#">FAQS</Link>
          <Link color="text.primary" href="#"> NEWSLETTER</Link>
          <Link color="text.primary" href="#"> INSTAGRAM</Link>
          <Link color="text.primary" href="#"> FACEBOOK</Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', margin: '0 auto', marginTop: '8px'}}>
          <p style={{fontSize: '12px'}}>+1 (000) 000-0000</p>
          <p style={{margin: '0 8px', marginTop: '-2px'}}>&#x2022;</p>
          <p style={{fontSize: '12px'}}>info@rivetertrade.com</p>
        </Box>
      </Box>
    </Box>
  )
}
