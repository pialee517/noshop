import React, { useContext, useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { Avatar, List,Button , ListItem, ListItemButton, Typography, Box, IconButton,useTheme, Divider } from '@mui/material'
import { NavLink } from 'react-router-dom'

import content from '../../content/admin'
import {ProSideBar,  Menu, MenuItem} from 'react-pro-sidebar'
// import 'react-pro-sidebar/dist/css/styles.css'

import AcUnitIcon from '@mui/icons-material/AcUnit';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuOutlined } from '@mui/icons-material'
import { ColorModeContext, tokens } from '../../Styles/theme'



function loader() {

}

const AdminSidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const [open, setOpen] = useState(true)

  const handleDrawer = ()=>{
    setOpen((prev) => !prev)
    console.log(open)
  }
  
  return (
   <Drawer 
   variant="permanent"
   anchor="left" sx={{ display: {xs:'none', sm: 'block'},
       '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {xs:'40px', sm:'200px'}}}}>
      <List sx={{pt:0}}>
        <ListItem sx={{justifyContent:'space-between', alignItems:'center', ...theme.mixins.toolbar}}>
          <Typography textAlign='center' variant="h5" fontWeight='800'>name</Typography>
          <IconButton onClick={()=>{setOpen(false)}}>
            <MenuIcon />
          </IconButton>
          
        </ListItem>
        <ListItem sx={{justifyContent:'center', p:2, display:{xs:'none', sm:'flex'}}}>
          <Avatar alt='name' sx={{ width:100 , height: 100 }}/></ListItem>
        {(content.sidebar).map(m => (
          <ListItem key={'admin_sidebar_' + m.name} sx={{p:0, m:0}}>
            <ListItemButton><AcUnitIcon/><Typography pl={1}>{m.name}</Typography></ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default AdminSidebar