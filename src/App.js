import logo from './logo.svg';

import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './components/pages/Home'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
