import { Box, Button} from '@mui/material'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export const SignUpCTA = ({heading, copy}: {heading: string, copy: string}) => {
	return (
		<Box sx={{background: '#FFF', borderRadius: '8px', padding: '24px 30px 32px', height: '100%', display: 'flex', flexDirection: 'column'}}>
			<h2 style={{fontWeight: 400, fontSize: '24px', color: '#002754'}}>{heading}</h2>
			<p style={{marginTop: '12px', marginBottom: '16px', fontSize: '16px', fontWeight: 400, letterSpacing: .08, lineHeight: '24px'}}>
					{copy}
			</p>
			<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexGrow: 1}}>
					<Button sx={{padding: '12px 52px', backgroundColor: '#0265DC', color: '#FFF'}}>SIGN UP</Button>
					<Box sx={{color: '#0265DC', fontWeight: 500, letterSpacing: '.2px', display: 'flex', alignItems: 'center'}}>
					<Link href="#" style={{display: 'flex', alignItems: 'center', padding: '12px 0'}}>
							LEARN MORE
							<ChevronRightIcon fill="#0265DC" />
					</Link>
					</Box>
			</Box>
		</Box>
	)
}