import React from 'react'

//material-ui
import TextField from '@mui/material/TextField'
import  Button  from '@mui/material/Button'
import Container from '@mui/material/Container'

//handler
import HandleLogin from './../../handler/HandleLogin'
import HandlePage from './../../handler/HandlePage'
import { Box, Dialog, DialogContent, DialogTitle,useTheme } from '@mui/material'
import { tokens } from '../../Styles/theme'
import { useNavigate, useParams } from 'react-router-dom'

const LoginPopup = () => {
  const param = useParams()
  const theme = useTheme()
  const colors = tokens(theme.palette.colors)

  const navigate = useNavigate()
  return (
    <Box sx={{backgroundColor:colors.backgroundColor, width:360}}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
          <form onSubmit={HandleLogin}>
            <Box display='grid' gap='10px' grid-template-columns='repeat(2, minmax(1, 1fr))'
              sx={{'& > div' : {gridColumn: 'span 2'}}}
            >
              <TextField id="txtEmail" label="Email" type='email' width='100%' my={1}/>
              <TextField id="txtPwd" label="Password" type='password' width='100%' my={1}/>
              <Button variant="outlined" onClick={(e)=>{e.preventDefault(); navigate('.')}}>Cancel</Button>
              <Button type="submit" variant="primary" color="default">Login</Button>
            </Box>
          </form>
        </DialogContent>
    </Box>
  )
}

export default LoginPopup