// import logo from './logo.svg';
import {ColorModeContext, useMode} from './Styles/theme'
import {CssBaseline, ThemeProvider } from '@mui/material'

import './App.css'
import React from 'react'
import router from './router'
import { RouterProvider } from 'react-router-dom';

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
