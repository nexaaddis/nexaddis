import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, Button, Divider } from "@mui/material";
import Footer from "../../components/Sections/Footer";
import Contact from "../../components/Contact/Contact";
import { HashLink } from "react-router-hash-link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  logoCard1,
  logoCard2,
  logoCard3,
  logoBg,
  logoSvg,
} from "../../assets";

const LogoDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bgcolor="#f9f9f9" fontFamily="Roboto, sans-serif">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "100vh", md: "75vh" },
          backgroundImage: `url(${logoBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e1e2e2",
          textAlign: "center",
          px: 2,
          pt: "6rem",
          backgroundColor: "rgba(255, 255, 255, .8)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, .8)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.7rem", md: "2.4rem" },
              color: "#e1e2e2",
              fontFamily: "Roboto, sans-serif",
              mb: { xs: 4, md: 2 },
              maxWidth: "99%",
              mx: "auto",
            }}
          >
            Elevate Your Brand with Ethiopian-Inspired Designs
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#e1e2e2",
              mb: 4,
              fontFamily: "Roboto, sans-serif",
              maxWidth: "85%",
              mx: "auto",
              textAlign: "center",
            }}
          >
            We make logos that tell your story. Combining Ethiopian heritage with cutting-edge design to create logos that stand out and resonate.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fb8122",
              border: "1px solid #fb8122",
              borderRadius: '12px',
              color: "#fff",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid #fb8122",
                color: "#fb8122",
              },
              mt: 3,
              px: 4,
              py: 1,
            }}
            component={HashLink}
            to="#contact"
          >
            Let's Talk
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 4, md: 6 },
          mb: { xs: 4, md: 6 },
          py: { xs: 3, md: 5 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2rem" },
            mb: 4,
            color: "#333",
          }}
        >
          Why Your Business Needs a Unique Logo?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, px: { xs: 1, md: 3 } }}
        >
          In the bustling market of Ethiopia, a logo is more than just a symbol—it's your brand's identity, a unique blend of your values, culture, and vision. A compelling logo can set you apart, make your brand memorable, and instantly connect with your target audience.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
              mb: 4,
              color: "#333",
            }}
          >
            Our Unique Approach
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 2 }}>
            At our company, we believe that a logo should not only be visually appealing but also meaningful. We draw inspiration from Ethiopia’s rich heritage—its colors, patterns, and history—and fuse it with contemporary design trends. Whether it's the vibrant hues of the Ethiopian flag or the intricate patterns of traditional textiles, every logo we create is a tribute to the beauty of Ethiopia.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 2 }}>
            Our process includes:
            <ul>
              <li><strong>Discovery and Research:</strong> We start by understanding your business, your vision, and your audience.</li>
              <li><strong>Concept Development:</strong> We brainstorm and sketch multiple ideas, exploring various visual directions.</li>
              <li><strong>Design and Refine:</strong> We refine the best concepts, focusing on details, colors, and typography.</li>
              <li><strong>Feedback and Finalization:</strong> Your feedback is crucial. We make adjustments until the logo is perfect.</li>
            </ul>
          </Typography>
        </Box>

        {/* Showcase Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
              mb: 2,
              fontFamily: "Roboto, sans-serif",
              color: "#333",
            }}
          >
            Showcase of Our Work
          </Typography>
          <Grid container spacing={4}>
            {[logoCard1, logoCard2, logoCard3].map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    overflow: "hidden",
                    height: 230,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    position: "relative",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                    "&:hover .arrow-btn": {
                      opacity: 1,
                      transition: "opacity 0.3s",
                    },
                  }}
                >
                  <img
                    src={src}
                    alt={`Logo Design ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                    }}
                  >
                    <Button
                      className="arrow-btn"
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ color: "#fb8122", opacity: 0, transition: "opacity 0.3s" }}
                    >
                      View Recent Works
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional Content Section */}
        <Divider sx={{ my: 8 }} />
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
                color: "#333",
              }}
            >
              Build Trust and Recognition
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2 }}>
              A well-designed logo fosters trust and recognition. It serves as the face of your business, appearing on your signage, website, and marketing materials. A unique logo not only grabs attention but also makes a powerful first impression, helping you stand out from competitors.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: "#fb8122",
                border: "1px solid #fb8122",
                borderRadius: '12px',
                color: "#fff",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "1px solid #fb8122",
                  color: "#fb8122",
                },
                px: 2,
                py: 1,
              }}
              component={HashLink}
              to="#contact"
            >
              Get Your Logo Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 500,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src={logoSvg}
                alt="Build Trust and Recognition"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Section */}
      <Contact id="contact" />
      <Footer />
    </Box>
  );
};

export default LogoDesignPage;
