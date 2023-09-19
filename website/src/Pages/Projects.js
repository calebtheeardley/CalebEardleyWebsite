import '../App.css'
import * as React from 'react';
import MenuBar from '../Components/MenuBar';
import ProjectCard from '../Components/ProjectCard';
import { Grid } from '@mui/material';

const cardsData = [
  {
    imageUrl: 'Images/ProjectsThumbnails/Redux.webp',
    title: 'Redux',
    description: 'This is a tool being developed at Idaho State University meant to visualize NP-Complete Problems and there reductions',
    linkTo: '/projects/redux',
  },
];

export default function Projects() {

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