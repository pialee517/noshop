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




function Nav() {
  const menu = [
    {name: 'No shop'},
    {name: 'product'},
    {name: 'cart'}
  ]
  const drawerWidth = 240
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  const drawer = (
    <div>
      <List>
      {menu.map(m => (
        <ListItemButton key={`drawer-` + m.name}>
          <ListItemText primary={m.name} />
        </ListItemButton>
      ))}
      </List>
    </div>
  )
  return (
    <React.Fragment>
      <AppBar position='static' elevation={0}>
        <Toolbar sx={{justifyContent:'space-between'}}>
          <IconButton sx={{display: { xs: 'inline-box', sm: 'none' }}} 
            aria-label="side-menu-drawering-icon" onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
          <List sx={{display: {xs: 'none', sm: 'inline-flex'}}}>
            {/* <ListItemButton>
              <ListItemText primary='No Shop' />
            </ListItemButton> */}
            {menu.map((m) => (
              <ListItemButton key={m.name}>
                <ListItemText primary={m.name} />
              </ListItemButton>))}
          </List>
          <IconButton>
            <Avatar src="/broken-image.jpg" sx={{ width: 30, height: 30 }}/>
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
       {drawer} 
      </Drawer>
      </AppBar>
     
    </React.Fragment>
  )
}

export default Nav
