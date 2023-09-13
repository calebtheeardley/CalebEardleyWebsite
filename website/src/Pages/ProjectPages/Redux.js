import '../../App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import MenuBar from '../../Components/MenuBar';

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
    size: 'large',
    // fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
    height: '100px',
    width: '400px'
}

export default function Redux() {
    return(
        <>
            <MenuBar></MenuBar>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                    paddingTop: 15,
                    paddingBottom: 0,


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
                            backgroundImage: 'url("../Images/ReduxFull.png")', // Replace with your image URL
                            backgroundSize: 'contain',
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
                            alignItems: 'center',
                            flexDirection: 'column',
                            paddingBottom: 12,
                            paddingTop: 15,
                        }}
                    >
                        <Typography 
                            variant="h1" 
                            style={{ 
                                fontSize: 40, 
                                fontWeight: 'bold', 
                                marginBottom: '8px',
                                textAlign: 'center',
                            }}>
                            Redux
                        </Typography>
                        <Typography 
                            variant="h2" 
                            style={{ 
                                fontSize: 35, 
                                color: 'rgba(0, 0, 0, 0.54)', 
                                marginBottom: '4px',
                                textAlign: 'center',
                            }}>
                            Idaho State University 01/2021-06/2023
                        </Typography>
                        <Typography 
                            variant="body1" 
                            style={{
                                fontSize: 30,
                                margin:90,
                                marginBottom: 0,
                                marginTop:30,
                                textIndent: 90,
                            }}>
                            Redux is a project I worked on headed by Dr. Paul Bodily and Kaden Marchetti at 
                            Idaho State University while pursueing my undergrad. It's purpose being to keep
                            a library of proven NP-Complete problems, as well as there reduction, verification,
                            and other related algorithms. Along with this it provides the ability to visualize
                            these reductions, and map solutions and reduction gadgets. While working on this
                            project I worked to implement a number of problems and algorithms, build and document
                            a custom api, and dynamically visualize a number of problems/reductions
                        </Typography>
                        <a href="https://redux.portneuf.cose.isu.edu/" target="_blank" rel="noopener noreferrer" style={{maxHeight: 100}}>
                            <Button sx={bStyle} theme={theme} color={'Theme1'} variant="contained">Check it Out</Button>
                        </a>
                    </Paper>
                </Box>
            </Box>
            
        </>
    )
}