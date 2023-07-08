import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'


const Item = (props) => {
  return (
    <Card elevation={0} sx={{borderRadius: 0, backgroundColor:'inherit', width: props.width ? props.width : 250 }}>
      {props.img && <CardMedia sx={{ height: props.height ? props.height : 200, width: props.width ? props.width : 250 }} component="img" alt={`products_image_${props.alt}`} image={props.img} />}
     {props.content &&<Typography p={1} textAlign='left'>{props.content}</Typography>}
    </Card>
  )
}

export default Item