import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const projects = [
  {
    image: 'https://via.placeholder.com/300',
    name: 'Currency Converter',
    languages: 'React, Node.js, Tailwind CSS',
    description: 'A web app to convert currencies in real-time.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300',
    name: 'Portfolio Website',
    languages: 'HTML, CSS, JavaScript',
    description: 'A personal portfolio to showcase my projects and skills.',
    link: '#',
  },
];

export default function Projects() {
  const theme = useTheme(); // ใช้ theme ปัจจุบันสำหรับ light และ dark mode

  return (
    <Box id="Projects" sx={{ py: 5 }}>
      <Typography 
        variant="h4" 
        sx={{ textAlign: 'center', mb: 4, color: theme.palette.text.primary }}
      >
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Card 
              sx={{ 
                backgroundColor: theme.palette.background.paper, 
                color: theme.palette.text.primary 
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                  Languages: {project.languages}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {project.description}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }} 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
