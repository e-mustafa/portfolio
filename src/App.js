import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import NavbarBottom from './Components/NavbarBottom';
import TogleTheme from './Components/TogleTheme';
import NavigationLg from './Components/NavigationLg';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';




function App() {

  const [toggleDark, settoggleDark] = useState(true);

  const myTheme = createTheme({
    // Theme settings
    palette: {
      mode: toggleDark ? "dark" : "light",
      primary:{main:'#018dff'},
      text:{disabled:'#018dff'}
    }
  });






  return (
    <ThemeProvider  theme={myTheme}>
      <CssBaseline />
      <TogleTheme toggleDark={toggleDark} settoggleDark={settoggleDark} />
      <NavigationLg />


      <Routes>
        <Route path='/mustafa-portfolio/' element={<Home/>} />
        <Route path='/mustafa-portfolio/about' element={<About/>}  />
        <Route path='/mustafa-portfolio/contact' element={<Contact/>} />
        <Route path='/mustafa-portfolio/portfolio' element={<Portfolio/>} />
      </Routes>


      <NavbarBottom/>
    </ThemeProvider>
  );
}

export default App;
