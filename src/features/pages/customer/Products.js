import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { ImageList, ImageListItem, ImageListItemBar, Stack, GridListTileBar, IconButton, CardActions, CardContent, CardMedia, Grid, Card, Box } from '@mui/material'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [vegetables, setVegetables] = useState(null)
  useEffect(() =>{
    const fetchData = async () =>{
      const data = await fetch('').then((response) => response.json()).then((data) => {return data});
      setVegetables(data)
    }
    fetchData()
  }, [])
  const navigate = useNavigate()
  const handleClick = (id) =>{
    console.log('handleClick')
    navigate("/product/:id")
    
  }
  const handleAdd = (id) =>{
    console.log('handleAdd')
  }
  return (
    <React.Fragment>
      <Typography variant="h1" color="initial">Products</Typography>
      {vegetables && <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {vegetables.map((vege)=> (
          <Card key={vege.id}>
            <CardContent onClick={handleClick(vege.id)}>
              <CardMedia
                  sx={{ height: 140 }}
                  image={`${vege.img}`}
                  title={vege.name} />
            </CardContent>
            <CardActions disableSpacing>
              <Typography aria-label="price" onClick={handleClick(vege.id)}>{vege.price}</Typography>
              <Typography aria-label="name" onClick={handleClick(vege.id)}>{vege.name}</Typography>
              <IconButton aria-label="add to the cart" onClick={(e)=>{e.preventDefault(); handleAdd(vege.id)}}>
                <AddCircleOutlineRoundedIcon />
              </IconButton>
            </CardActions>
          </Card>))}
        </Grid>
      </Grid>}
    </React.Fragment>

  )
}

export default Products