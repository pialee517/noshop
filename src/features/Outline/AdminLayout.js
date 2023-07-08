import React from 'react'
import { Outlet } from 'react-router-dom'

//components
import AdminHeader from './AdminHeader'
import { CssBaseline, Box } from '@mui/material'


const AdminLayout = () => {
  return (
    <React.Fragment>
      {/* <Box display='flex'> */}
        <AdminHeader />
        <main>
          <Outlet />
        </main>
      {/* </Box> */}
    </React.Fragment>
  )
}

export default AdminLayout