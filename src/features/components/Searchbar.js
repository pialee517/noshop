import React, { Fragment, useContext } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, MenuItem,Stack,Container,InputAdornment, AppBar, Toolbar, InputBase,  useTheme} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


// import style from './../../'


import './../../Styles/global.css'
import { ColorModeContext, tokens } from '../../Styles/theme';

const Searchbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <AppBar position="sticky" elevation={0} 
      sx={{
        // boxSizing:'border-box', display:'flex', px:2, py:1, 
      // justifyContent:'space-between', 
      // flexDirection:'row', 
      width: {xs: 'calc(100%-40px)', sm: `calc(100% - 200px)`}, 
      left:{xs:'40px', sm: '200px'}}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
        <Box direction='row'
          noValidate
          autoComplete="off">
        <InputBase
          sx={{backgroundColor:colors.blue[300], px:1, borderRadius:'3px'}}
          id="nav-txtsearch"
          placeholder="Search"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          // variant="standard"
          type='text' 
          endAdornment={
            <InputAdornment position="end" sx={{cursor:'pointer'}}>
              <SearchIcon />
            </InputAdornment>}
            />
          </Box>
            {/* <MenuItem> */}
          {/* <SearchIcon /> */}
          {/* </MenuItem> */}
        <Box direction='row'>
          {/* <IconButton><SettingsIcon /></IconButton> */}
          <IconButton><LanguageIcon /></IconButton>
          <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === 'dark'? <LightModeIcon />:<DarkModeIcon />}</IconButton>
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Searchbar