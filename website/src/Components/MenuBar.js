import '../App.css'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../Icons/HomeIcon';

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
    fontSize: 25,
    minHeight: '75px'
}



const getColor = (path, location) => {
  if(path === '/'){
    if (path === location){
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
              minHeight: '75px',
          }}
          >
          <Toolbar
            disableGutters={true}
            sx={{ 
              paddingLeft: 0,
              paddingRight: 0,
              marginLeft: 0,
              marginRight: 0,
              flexGrow: 1,
            }}
          >
              <Button component={Link} to="/" sx={bStyle} style = {{backgroundColor: getColor('/', location)}} ><HomeIcon sx={{fontSize: 40}}/></Button>
              <Button component={Link} to="/projects" sx={bStyle} style = {{backgroundColor: getColor('projects', location)}}>Projects</Button>
              {/* <Button component={Link} to="/research" sx={bStyle} style = {{backgroundColor: getColor('research', location)}}>Research</Button> */}
              <Button component={Link} to="/cv" sx={bStyle} style = {{backgroundColor: getColor('cv', location)}}>CV</Button>
              <Button component={Link} to="/links" sx={bStyle} style = {{backgroundColor: getColor('links', location)}}>Links</Button>
          </Toolbar>
      </AppBar>
  )
}