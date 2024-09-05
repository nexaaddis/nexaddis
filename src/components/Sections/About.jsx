import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { aboutusBg2 } from '../../assets';

const AboutUsSection = () => {
  const navigate = useNavigate();

  return (
    <Box component="section" id="about" sx={{ py: { xs: "4rem", md: "5rem" }, bgcolor: '#f4f4f4', width: '100%' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { xs: 2, sm: 3 } }}>
              <Typography
                variant="body1"
                fontWeight="bold"
                letterSpacing={1.5}
                sx={{
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1.2rem' },
                  mb: 1,
                  color: 'var(--primary-color)',
                  textTransform: 'uppercase',
                }}
              >
                About us
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  fontWeight: "bold",
                  color: "var(--secondary-color)",
                  mb: 2,
                }}
              >
                Software & Designing Firm
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.8rem", sm: ".9rem", md: "1rem" },
                  color: "var(--bg-muted-color)",
                  mb: { xs: 4, md: 5 },
                }}
              >
                We are a team of creative professionals committed to delivering high-quality software and design solutions. Our mission is to empower businesses through innovative technology and exceptional design, turning your ideas into reality.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: 2,
                }}
              >
                <Button
                  sx={{
                    textTransform: "uppercase",
                    border: "1px solid var(--primary-color)",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    px: 3,
                    py: 1,
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "var(--primary-color)",
                    },
                  }}
                  onClick={() => navigate('/about')}
                >
                  See more
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Box
                component="img"
                src={aboutusBg2}
                alt="Large Office"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  maxHeight: { xs: "auto", md: "auto" },
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  objectFit: "cover",
                  maxWidth: '600px', maxHeight: '600px'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
