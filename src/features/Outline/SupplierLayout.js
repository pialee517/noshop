import React from 'react'
//components
import AdminSidebar from '../components/AdminSidebar'
import Searchbar from '../components/Searchbar'
import { Outlet } from 'react-router-dom'


const SupplierLayout = () => {
  return (
    <React.Fragment>
        <Searchbar />
        <main>
            <Outlet />
        </main>
        <AdminSidebar />

    </React.Fragment>
  )
}

export default SupplierLayout