import React from 'react'
import Typography from '@mui/material/Typography'
import { CardContent, CardMedia, Card, Stack, Divider } from '@mui/material'



// import imghalf from './../../assets/images/photo-1516259762381-22954d7d3ad2.jpeg'
import Item from './Item'
// import { content as customerPageContent } from '../../content/customer'


const Services = ({title, subtitle, items}) => {
  // const items = customerPageContent.home.services
  return (
    <React.Fragment>
        <Typography mt={4} variant="h5" color="initial">{title}</Typography>
        <Typography mb={4} variant="h3" color="initial">{subtitle}</Typography>
        <Stack my={1} sx={{justifyContent:{xs:'center'}}} direction={{xs:'column', md:'row'}} alignItems={{xs: 'center', md: 'start'}} spacing={4}>
            {items.map((item, idx) => (<Item key={'serices_img' + idx} img={item.img} content={item.content}/>))}
        </Stack>
    </React.Fragment>
  )
}

export default Services