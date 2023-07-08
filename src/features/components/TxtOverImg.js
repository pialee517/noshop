import React from 'react'
import { Paper, Typography, Grid, Box } from '@mui/material'

const TxtOverImg = ({title, subtitle, img, imgH='400px', items}) => {
  return (
    <React.Fragment>
        <Box py={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100vw', height: {imgH}, backgroundImage: {img}, backgroundColor: 'green'}}>
            {title && <Typography variant="h6">{title}</Typography>}
            {subtitle && <Typography pt={2}  pb={4} variant="h4" color="initial">{subtitle}</Typography>}
            <Grid container spacing={4} pb={4} justifyContent='center'>
            {items.map((item, idx)=>(
            <Grid item xs={12} sm={4} key={idx+item.name}>
                <Paper elevation={0} sx={{background: 'transparent'}}>
                    <Typography variant='h3'>{item.name}</Typography>
                    <Typography variant='h5'>{item.content}</Typography>
                </Paper>
              </Grid>))}
            </Grid>
        </Box>
    </React.Fragment>
  )
}

export default TxtOverImg