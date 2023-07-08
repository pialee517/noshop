import React from 'react'

//components
import Nav from './../components/Nav'

import {content} from './../../content/customer'

const Header = () => {
  const nav = content.nav
  return (
    <React.Fragment>
        <Nav nav={nav} />
    </React.Fragment>
  )
}

export default Header