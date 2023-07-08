import React from 'react'
import Typography from '@mui/material/Typography'
import HandlePage from '../../handler/HandlePage'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'



const Error = () => {
  return (
    <React.Fragment>
        <Typography variant="h1" color="initial">An error occured!</Typography>
        <Container fixed><Button onClick={(e)=>{HandlePage(e)}}>Go back to the previous page</Button>
        <Button onClick={(e)=>{HandlePage(e, '/')}}>Go back to the main</Button></Container>
    </React.Fragment>
  )
}

export default Error