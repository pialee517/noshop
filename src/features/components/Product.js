import { Card, CardActions, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material', CardMedia
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'

const Product = () => {
  return (
    <React.Fragment>
        <Card>
        <CardActionArea>
            <CardMedia title="" image="" />
            <CardContent>
                <Typography variant="h1" color="initial">name</Typography>
                <Typography variant="h1" color="initial">price</Typography>
            </CardContent>
            <AddCircleIcon />
        </CardActionArea>
        </Card>
    </React.Fragment>
  )
}

export default Product