import '../App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import MenuBar from '../Components/MenuBar';

const theme = createTheme({
  palette: {
    Theme1: {
      main: '#769fb6',
      light: '#9dbbae',
      dark: '#188fa7',
      contrastText: '#242105',
    },
  },
});



export default function Research() {

    const bStyle = {
        flexGrow: 1,
        color: 'inherit',
        size: 'large',
        // fontWeight: 'bold',
        fontSize: 30,
        minHeight: '100px'
    }
    return(
        <>
            <MenuBar></MenuBar>
            
            
        </>
    )
}