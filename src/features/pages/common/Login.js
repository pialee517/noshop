import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

//material-ui



const Login = () => {
  return (
 <React.Fragment>
    <Typography>Login</Typography>
    <Box>
        {/* <form onSubmit={HandleLogin}> */}
            <TextField id="txtEmail" label="Email" type='email' width='100%' my={1}/>
            <TextField id="txtPwd" label="Password" type='password' width='100%' my={1}/>
            <Container sx={{display:'flex', flexDirection: 'row', gap:1}} my={1}>
                <Button variant="outlined" >Cancel</Button>
                <Button type="submit" variant="primary" color="default">Login</Button>
            </Container>
        {/* </form> */}
      </Box>
  </React.Fragment>
  )
}

export default Login