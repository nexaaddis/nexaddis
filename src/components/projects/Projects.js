import React, { useState } from "react";
import { Grid, Container, Typography, Box, Button } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
import {
  workImgFour,
  restaurant,
  TicTacToe,
  shop,
  health,
  prodac,
} from "../../assets";

// Array of project data
const projectsData = [
  { title: "Geretcht", category: "Restaurant", image: restaurant, url: "https://gericht-green.vercel.app/" },
  { title: "Tic Tac Toe", category: "Game", image: TicTacToe, url: "https://tictactoe-production-f0a0.up.railway.app" },
  { title: "DocStream", category: "Healthcare", image: health, url: "https://docstream-frontend.onrender.com/" },
  { title: "Mobile Application", category: "Shopping", image: shop, url: "https://forever-ecom.vercel.app/" },
  { title: "Prodac", category: "Car Seller", image: prodac, url: "https://prodac.vercel.app/" },
  { title: "Graphic Design", category: "Design", image: workImgFour, url: "http://handyman" },
];

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemsToShow = isExpanded ? projectsData.length : 6;

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: "#fdfdfd",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        id="projects"
        sx={{ color: "#f0f0f0", width: "99%", margin: "5rem auto", m: "3rem 0" }}
      >
        <Box
          sx={{
            mb: "2rem",
            textAlign: { xs: "center", md: "center", lg: "left" },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
              mb: "0.5rem",
              color: "var(--primary-color)",
              textTransform: "uppercase",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "700",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
              color: "#1c2229",
            }}
          >
            Our Recent Projects
          </Typography>
          <Typography variant="body1" mt={1} color="#3a3f45">
            Discover our recent work, showcasing solutions that elevate business
            success and innovation.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projectsData.slice(0, itemsToShow).map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <ProjectsCard
                title={project.title}
                category={project.category}
                image={project.image}
                url={project.url}
              />
            </Grid>
          ))}
        </Grid>
        {projectsData.length > 6 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              onClick={handleToggle}
              sx={{
                border: "1px solid #fb8122",
                backgroundColor: "transparent",
                borderRadius: "10px",
                color: "#fb8122",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#eee",
                  border: "1px solid #fb8122",
                  color: "#fd8122",
                },
                mt: 3,
                px: 4,
                py: 1,
              }}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Projects;
