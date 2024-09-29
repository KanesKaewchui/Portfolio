import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const projects = [
  {
    image: "public/playhub.jpg",
    name: "Playhub",
    languages: "React, Node.js, MongoDB, MUI",
    description: "Fitness web app",
    link: "https://chiba-matcha-front-end.vercel.app/",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Currency Converter",
    languages: "React, JavaScript",
    description: "currency converter project",
    link: "https://currency-converter-project-sand.vercel.app/",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Portfolio Website",
    languages: "HTML, CSS, JavaScript",
    description: "A personal portfolio to showcase my projects and skills.",
    link: "#",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Portfolio Website",
    languages: "HTML, CSS, JavaScript",
    description: "A personal portfolio to showcase my projects and skills.",
    link: "#",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <Box id="Projects" sx={{ py: 12, px: 2 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 4, color: theme.palette.text.primary }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={10} sm={8} md={5}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                maxWidth: "100%",
                mx: "auto",
                px: 1,
              }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.name}
                sx={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "20px",
                  width: "96%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ my: "8px" }}>
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.text.secondary}>
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
                  rel="noopener noreferrer">
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
