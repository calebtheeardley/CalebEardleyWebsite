import React from 'react';
import { createTheme } from '@mui/material/styles';
import { Button, Typography, makeStyles } from '@mui/material';

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

export default function LinkCard({ icon, text, linkTo }){
    const buttonStyle={
          display: 'flex',
          alignItems: 'center',
          height: 75,
          margin: 10,
          marginLeft: 50,
          marginRight: 50,
          padding: 6,
          borderRadius: '5px',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.05)',
          },
    }
  
    return (
        <a href={linkTo} target="_blank" rel="noopener noreferrer" 
            style={{
                maxHeight: 100,
                width:'100%',
                textDecoration: 'none',
                margin: 10,
            }}>
            <Button
                to={linkTo}
                theme={theme}
                color={'Theme1'}
                sx={buttonStyle}
                variant="contained"
            >
                {icon && <div
                    style={{
                        marginRight:50,
                    }}>
                    {icon}
                </div>}
                <Typography style={{fontSize: 25,}}>{text}</Typography>
            </Button>
        </a>
    );
  };