import '../App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import MenuBar from '../Components/MenuBar';


const titleStyle = {
    marginBottom: '20px',
    maxWidth: "100vw",
    marginRight: 75,
    marginLeft: 75,
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: 80
  };

const aboutMeStyle = {
    marginBottom: '20px',
    maxWidth: "100vw",
    marginRight: 75,
    marginLeft: 75,
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: 22
};


export default function Home() {

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
                            flexDirection: 'column',
                            justifyContent: 'center', // Center horizontally
                            alignItems: 'left', // Center vertically
                        }}
                    >
                        {/* <Typography
                            sx={{
                                textAlign: 'center',
                                m: 30,
                                fontSize: 30,
                                marginTop: 30,
                            }}
                        >
                            
                        </Typography> */}
                            <Typography style={aboutMeStyle}>
                                Hello, my name is
                            </Typography>
                            <Typography style={titleStyle}>
                               Caleb Eardley
                            </Typography>
                            <Typography style={aboutMeStyle}>
                                Hello there! I'm Caleb Eardley, a graduate student at Montana State University.
                            </Typography>
                            <Typography style={aboutMeStyle}>
                                I am currently pursuing my master's degree in Computer Science,
                                specifically interested in Algorithms, and Computational Theory. 
                                My academic pursuits are driven by a desire to find novel solutions to
                                problems encoutered everyday.
                            </Typography>
                            <Typography style={aboutMeStyle}>
                                I recieved a Bachelors of Science in Computer Science from Idaho State University
                                in December of 2022, and began my studies at MSU in August of 2023. At Idaho State University
                                I was a research assistant for Dr. Paul Bodily where I worked on a team developing an educational
                                tool called Redux, meant to collect and visualoze NP-Complete problems.
                            </Typography>
                            <Typography style={aboutMeStyle}>
                                Ultimatly I would like to get a Ph.D. in Computer Science and work at a University 
                                as an instructor and researcher.
                            </Typography>

                            <Typography style={aboutMeStyle}>
                                I'm always eager to connect with fellow enthusiasts,
                                researchers, and potential collaborators. Feel free to explore my
                                website, check out my projects, and don't hesitate to reach out. 
                            </Typography>
                    </Paper>
                </Box>
            </Box>
            
        </>
    )
}