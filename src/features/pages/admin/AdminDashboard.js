import React from 'react'
import Typography from '@mui/material/Typography'
import { Stack, Box } from '@mui/material'
import BoardHeader from '../../components/BoardHeader'
import DataTable from '../../components/DataTable'

const AdminDashboard = () => {
  return (
    <Box position='sticky' width='calc(100%-200px)' left='200px'>
      <BoardHeader title='Dashboard' subtitle='Welcome to your bashboard' />
      <DataTable />
    </Box>
  )
}

export default AdminDashboard