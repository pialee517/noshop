import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


const NotFound = () => {
  return (
    <React.Fragment>
        <Typography variant="h1" color="initial">NotFound</Typography>
        <Typography variant="h1" color="initial">Page was not found</Typography>
        <Button variant="text" color="default">
          Go back to the main page
        </Button>
        </React.Fragment>
  )
}

export default NotFound