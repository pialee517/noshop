import React from 'react'
import { Outlet } from 'react-router-dom'
//components
import Footer from './Footer'
import Header from './Header'


const Layout = () => {

  return (
    <React.Fragment>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </React.Fragment>
  )
}

export default Layout
