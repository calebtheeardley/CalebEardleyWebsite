import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
}

export default function ProjectCard({ imageUrl, title, description, linkTo }) {
    return (
        <Link component={RouterLink} to={linkTo} style={{ textDecoration: 'none' }}>
          <Card sx={cardStyle} elevation={3}>
            <CardMedia
              component="img"
              image={imageUrl}
              alt={title}
              style={{
                flex: '1', 
                objectFit: 'cover',
              }}

            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      );
}