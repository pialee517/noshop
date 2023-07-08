import React from 'react'
import Container from '@mui/material/Container'
import { CardContent, CardMedia,Card, List, ListItemText, ListItem, Typography,Box } from '@mui/material'

const items = [
    'a',
    'b',
    'c'
]
const SideBySide = ({img, title, subtitle, items}) => {
  return (
        <Box elevation={0} py={4} px={10} sx={{display:'flex', height: { xs: '300px', md:'50vw' }, width: '100vw', justifyContent:'center', alignItems: 'center', flexDirection: {xs: 'column', md:'row'}, py:4}}>
          {img && <img src={img} sx={{height:{xs:'50%'}, width:{xs:'100%', sm:'50%'}, float:{xs: "none", sm:'right'}}} objectFit='cover' />}
          <List>
              {title && <ListItem>
                  <Typography variant="h3" color="initial">{title}</Typography>
              </ListItem>}
              {subtitle && <ListItem>
                  <Typography variant="h5" color="initial">{subtitle}</Typography>
              </ListItem>}
          {items && items.map((x, i)=>(
              <ListItem component='li' key={i+x}>
                  <ListItemText primary={x} />
              </ListItem>
          ))}
          </List>
        </Box>
  )
}

export default SideBySide