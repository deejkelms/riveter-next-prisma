import { Box } from '@mui/material'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export const LearnMoreLink = () => {
	{/* TODO: maybe use material Button */}
	return (
		<Box sx={{color: '#0265DC', fontWeight: 500, letterSpacing: '.2px', display: 'flex', alignItems: 'center', padding: '8px 0'}}>
			<Link href="#" style={{display: 'flex', alignItems: 'center'}}>
				LEARN MORE
				<ChevronRightIcon fill="#0265DC" />
			</Link>
		</Box>
	)
}