import { ReactNode } from "react"
import { Responsive } from "./responsiveStyles"

type HeadingScales = 'SMALL' | 'NORMAL'

interface Props {
	scale: Responsive<HeadingScales>
	children: ReactNode
  color?: string
}

export const Subheading = ({scale, color = "#003571", children}: Props) => {
	let fontSize, fontWeight, lineHeight, letterSpacing
	switch (scale) {
		case 'SMALL':
			fontSize = '16px'
			fontWeight = 500,
			lineHeight = '24px'
			letterSpacing = '0.08px'
			break
		case 'NORMAL':
			fontSize = '20px'
			fontWeight = 400,
			lineHeight = '30px'
			letterSpacing = '0.05px'
			break
	}
	return (
    <h1 style={{fontSize, fontWeight, lineHeight, letterSpacing, color}}>{children}</h1>
	)
}