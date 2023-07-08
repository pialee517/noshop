import React from 'react'
//material-ui
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import { tokens } from '../../Styles/theme'

const Footer = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.colors)
  return (
    <React.Fragment>
      <Box py={4} sx={{ width: '100vw', backgroundColor:colors.primary[500]}}>
        <Typography variant="h5">Follow No Shop</Typography>
        <Stack py={1} spacing={2}>
          {/* <img src /> */}
        </Stack>
        <Typography>Copyright &copy; No Shop 2023</Typography>
      </Box>
    </React.Fragment>
  )
}

export default Footer
