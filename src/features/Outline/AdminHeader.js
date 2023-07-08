import React from 'react'
import Searchbar from './../components/Searchbar'
import AdminSidebar from './../components/AdminSidebar'
import { CssBaseline } from '@mui/material'

const AdminHeader = () => {
  return (
    <React.Fragment>
        <AdminSidebar />
        <Searchbar />
    </React.Fragment>
  )
}

export default AdminHeader