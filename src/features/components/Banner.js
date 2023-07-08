import React from 'react'
//material-ui
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Banner = ({img, imgH = '100%', alt, bgcolor}) => {
  return (
    <React.Fragment>
        <Box sx={{width:'100%', height: '40vw'}}>
          <img src={`${img}`} style={{objectFit: 'cover'}} width='100%' height={imgH} alt={alt} />
        </Box>

        {/* <Paper elevation={0} sx={{borderRadius: '0px', height:{xs:'100vw', sm:'50vw', md: '40vw'}, width:'100vw', background:`url('${img}') center center / cover no-repeat`}} >
            <Paper elevation={0} sx={{borderRadius: '0px', height:{xs:'50vw', sm:'50vw', md: '40vw'}, width:{xs:'100vw', sm:'50vw'}, backgroundColor:blue[100]}}>
            <Typography>akdjlfad</Typography>
            </Paper>
        </Paper> */}
    </React.Fragment>
  )
}

export default Banner