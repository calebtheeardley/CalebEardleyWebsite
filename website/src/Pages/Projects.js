import '../App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import MenuBar from '../Components/MenuBar';
import ProjectCard from '../Components/ProjectCard';
import { Grid } from '@mui/material';

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



const cardsData = [
  {
    imageUrl: 'Images/ProjectsThumbnails/Redux.webp',
    title: 'Redux',
    description: 'This is a tool being developed at Idaho State University meant to visualize NP-Complete Problems and there reductions',
    linkTo: '/projects/redux',
  },
];



export default function Projects() {

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
            <Grid 
              container 
              spacing={3}
              padding={5}
              paddingTop={15}
              >
              {cardsData.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <ProjectCard {...card} />
                </Grid>
              ))}
            </Grid>
            
        </>
    )
}