import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import BoardHeader from './../../components/BoardHeader'



const ProductDetail = () => {
  const id = useParams()
  console.log(id)
  return (
    <React.Fragment>
        {/* <BoardHeader titl> */}

    </React.Fragment>
  )
}

export default ProductDetail