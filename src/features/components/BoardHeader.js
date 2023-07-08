import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Divider, useTheme } from '@mui/material'
import { tokens } from '../../Styles/theme'


const BoardHeader = ({title, subtitle}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.colors)
  return (
    <Box 
    width='100vw'
    textAlign='start'
    py={1}
    //sidebar width
     px={30}
     >
        {title && <Typography variant="h4" fontWeight='bold' textTransform='uppercase'>{title}</Typography>}
        {subtitle && <Typography variant="body1" color={colors.gray[200]}>{subtitle}</Typography>}
    </Box>
  )
}

export default BoardHeader