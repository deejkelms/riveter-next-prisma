import { ReactNode } from "react"
import { Responsive } from "./responsiveStyles"

type HeadingScales = 'XS' | 'S' | 'M' | 'L' | 'XL'

interface Props {
	scale: Responsive<HeadingScales>
	children: ReactNode
	color?: string
}

export const Heading = ({scale, color, children}: Props) => {
	let fontSize, fontWeight, lineHeight, letterSpacing
	switch (scale) {
		case 'XS':
			fontSize = '20px'
			fontWeight = 500,
			lineHeight = '30px'
			letterSpacing = '0.03px'
			break
		case 'S':
			fontSize = '24px'
			fontWeight = 400,
			lineHeight = '36px'
			letterSpacing = 'inherit'
			break
		case 'M':
			fontSize = '36px'
			fontWeight = 400,
			lineHeight = '54px'
			letterSpacing = '0.09px'
			break
		case 'L':
			fontSize = '40px'
			fontWeight = 400,
			lineHeight = '66px'
			letterSpacing = '-0.2px'
			break
		case 'XL':
			fontSize = '48px'
			fontWeight = 300,
			lineHeight = '72px'
			letterSpacing = '-0.24px'
			break
	}
	return (
			<h1 style={{fontSize, fontWeight, color, lineHeight, letterSpacing}}>{children}</h1>
	)
}