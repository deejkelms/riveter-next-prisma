import { Box, Button, GlobalStylesProps, StyledComponentProps} from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { Subheading } from '../typography/Subheading'
import { Heading } from '../typography/Heading'

interface Props {
  marginTop: string
  imgSrc: StaticImageData
  alt: string
  imgWidth: number
  imgHeight: number
  imgStyles: any // fix this to not be any
  heading: string
  subHeading: string
  copy: string
}

// todo: this could be much more smart; fine for now
export const MediaTextBlock = ({marginTop, imgSrc, alt, imgWidth, imgHeight, imgStyles, heading, subHeading, copy }: Props) => {
  return (
    <Box sx={{marginTop: marginTop, display: 'flex', flexDirection: 'row', gap: '26px'}}>
      <Image src={imgSrc} alt={alt} width={imgWidth} height={imgHeight} style={imgStyles} />
      <Box sx={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
        <Subheading scale="SMALL">{heading}</Subheading>
        <Heading scale="S">{subHeading}</Heading>
        <p style={{fontSize: '16px', lineHeight: '24px', letterSpacing: '0.08px', width: '80%'}}>{copy}</p>
      </Box>
    </Box>
  )
}