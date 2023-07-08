import React from 'react'
import Typography from '@mui/material/Typography'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField'
import { Container, Grid, Stack } from '@mui/material';


const Cart = () => {
  return (
    <React.Fragment>
        <Typography variant="h1" color="initial">Cart</Typography>
        <Stack>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h1" color="initial">item in cart</Typography>
                    <Container>
                        <RemoveCircleOutlineIcon />
                        <Typography>num. </Typography>
                        <Typography>product.name</Typography>
                        <>
                            <RemoveCircleIcon />
                            <TextField
                                id=""
                                type='number'
                                label=""
                                value={1}
                                onChange={()=>{}}/>
                            <AddCircleIcon />
                        </>
                        <Typography>Price</Typography>
                    </Container>
                </Grid>
            </Grid>
            {/* <Grid>
                <Grid>
                    <Typography variant="h1" color="initial">total</Typography>
                </Grid>
            </Grid> */}
        </Stack>
    </React.Fragment>
  )
}

export default Cart