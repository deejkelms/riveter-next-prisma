import { Box } from "@mui/material"

export const Divider = ({color = "#000"}: {color?: string}) => {
  return (
    <Box height="1px" sx={{backgroundColor: color}} />
  )
}