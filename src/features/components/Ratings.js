import React from 'react'
import Rating from '@mui/material/Rating';
import { Card, Box, CardHeader, Avatar, IconButton, CardContent, Typography, Stack, Paper, useTheme } from '@mui/material';
import { tokens } from '../../Styles/theme';

const Ratings = (props) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.colors)
  return (
    <React.Fragment>
        <Stack spacing={3}
            direction={{xs: 'column', md: 'row'}}
            alignItems={{xs: 'center', md: 'start'}}
            sx={{justifyContent: 'space-evenly', px:{xs:1, sm:2, md:3}, py:4}}>
        {props.reviews && props.reviews.map((writing)=>(
            <Paper elevation={0} sx={{p:2}} key={`${writing.id}-${writing.title}`} >
                {/* <CardHeader title={`"${writing.title}"`} /> */}
                    <Typography variant="h4" fontWeight='bold' color="initial" pb={2}>{`"${writing.title}"`}</Typography>
                    <Rating name="read-only" value={writing.star} readOnly />
                    <Typography variant="h6" color={colors.gray[200]}>{writing.content}</Typography>
                    <Typography variant="h6" fontWeight='800'color={colors.primary[500]} pt={1}>{writing.writer}</Typography>
            </Paper>
        ))}
        </Stack>
    </React.Fragment>
  )
}

export default Ratings