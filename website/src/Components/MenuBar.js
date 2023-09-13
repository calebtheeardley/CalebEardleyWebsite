import '../App.css'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const theme = createTheme({
    palette: {
      Theme1: {
        main: '#769fb6',
        light: '#9dbbae',
        dark: '#4f6d96',
        contrastText: '#1a2328',
      },
    },
  });

  const bStyle = {
    flexGrow: 1,
    color: 'inherit',
    size: 'large',
    // fontWeight: 'bold',
    fontSize: 30,
    minHeight: '100px'
}

const getColor = (path, location) => {
  if(path == '/'){
    if (path == location){
      return theme.palette.Theme1.dark;
    }
    else{
      return theme.palette.Theme1.main
    }
  }
  else if(location.includes(path)){
    return theme.palette.Theme1.dark;
  }
  else return theme.palette.Theme1.main
}

export default function MenuBar() {
  const location = useLocation().pathname
  return(
      <AppBar 
          color = 'Theme1'
          theme = {theme}
          sx={{
              display: 'flex',
              minHeight: '100px',
          }}
          >
          <Toolbar
            sx={{ 
              paddingLeft: 0,
              paddingRight: 0,
              flexGrow: 1,
            }}
          >
              <Button component={Link} to="/" sx={bStyle} style = {{backgroundColor: getColor('/', location)}}>Home</Button>
              <Button component={Link} to="/projects" sx={bStyle} style = {{backgroundColor: getColor('projects', location)}}>Projects</Button>
              <Button component={Link} to="/research" sx={bStyle} style = {{backgroundColor: getColor('research', location)}}>Research</Button>
              <Button component={Link} to="/cv" sx={bStyle} style = {{backgroundColor: getColor('cv', location)}}>CV</Button>
              <Button component={Link} to="/contact" sx={bStyle} style = {{backgroundColor: getColor('contact', location)}}>Contact</Button>
          </Toolbar>
      </AppBar>
  )
}