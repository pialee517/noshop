import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar'
import Dialog from '@mui/material/Dialog'
import { DialogTitle, TextField, DialogContent, Box, ListItem, useTheme } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'

//components
import Sidebar from './Sidebar'
import LoginPopup from './LoginPopup'
import HandlePage from './../../handler/HandlePage'
import HandleLogin from './../../handler/HandleLogin'
import { tokens } from '../../Styles/theme'

function Nav({nav}) {
  //theme
  const theme = useTheme()
  const colors = tokens(theme.palette.colors)
  
  const navigate = useNavigate()
  const drawerWidth = 240

  const [openDrawer, setOpenDrawer] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  const handleDialog = () => {
    setOpenDialog(!openDialog)
    console.log('handle Dialog')
  }
  const handlePage = (e, path) => {
    e.preventDefault()
    navigate(path)
  }
  
  return (
    <React.Fragment>
      <AppBar position='static' elevation={0}>
        <Toolbar sx={{justifyContent:'space-between'}}>
          <IconButton sx={{display: { xs: 'inline-box', sm: 'none' }}} 
            aria-label="side-menu-drawering-icon" onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
          <List sx={{display: {xs: 'none', sm: 'inline-flex'}}}>
            {nav.map((item) => (
              <NavLink to={item.path} key={`main-`+item.name}>
                <ListItem>
                  {item.name}
                </ListItem>
              </NavLink>))}
          </List>
          <IconButton onClick={handleDialog}>
            <Avatar src="/broken-image.jpg" sx={{ width: 30, height: 30 }} />
          </IconButton>
        </Toolbar>
        <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={handleDrawer}
        sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
            {/* <Sidebar nav={nav}/> */}
       <List>
      {nav && nav.map(item => (
          <NavLink to={item.path} key={`drawer-` + item.name} onClick={handleDrawer}>
            <ListItem>
              {item.name}
            </ListItem>
          </NavLink>
      ))}
      </List>
      </Drawer>
      </AppBar>
      <Dialog 
      open={openDialog} 
      onClose={handleDialog} 
      aria-labelledby="window for login">
          <LoginPopup />
      </Dialog>
     
    </React.Fragment>
  )
}

export default Nav
