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



export default function Home() {

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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',

                }}
                spacing={0}
            >
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        '& > :not(style)': {
                            m: 0,
                            width: '40vw',
                        },
                        flex: 1,
                    }}
                >
                    <Paper
                        sx={{
                            display: 'flex',
                            alignItems: 'center', // Center vertically
                            justifyContent: 'center',
                            backgroundImage: 'url("Images/MeCropped.webp")', // Replace with your image URL
                            backgroundSize: 'cover',
                          }}
                    >
                    </Paper>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                        m: 0,
                        width: '60vw',
                        },
                        flex: 1,
                    }}
                >
                    <Paper
                        sx={{
                            display: 'flex',
                            justifyContent: 'center', // Center horizontally
                            alignItems: 'center', // Center vertically
                        }}
                    >
                        <Typography
                            sx={{
                                textAlign: 'center',
                                m: 30,
                                fontSize: 30,
                                marginTop: 30,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla bibendum tellus, id scelerisque nibh tristique quis. Fusce gravida urna id fermentum ullamcorper. Vivamus tristique mauris eget semper. Sed vestibulum, ante quis pellentesque cursus, purus sapien ultricies metus, non volutpat purus est sit amet arcu. Proin gravida vulputate enim, in cursus velit suscipit in. Nulla semper id justo eget laoreet. Integer varius, nisl id ullamcorper feugiat, odio arcu viverra tortor, vel bibendum est ex ac mi. Quisque aliquet ante nec dolor blandit, id efficitur nisi vestibulum. Etiam a tellus vel urna interdum facilisis id eget turpis. Nunc bibendum euismod tellus, at consequat dolor luctus at. Sed id facilisis justo. Nulla facilisi.
                        </Typography>
                    </Paper>
                </Box>
            </Box>
            
        </>
    )
}