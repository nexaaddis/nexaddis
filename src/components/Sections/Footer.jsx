import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Divider, IconButton } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Assets
import { mainLogo } from "../../assets";


export default function Contact() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#1c2229",
        color: "#e1e2e2",
        p: { xs: "4 0", sm: "5 0", md: "8 0 4 0" },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Link
              to="#home"
              smooth
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
              }}
            >
              <Box
                component="img"
                src={mainLogo}
                alt="Nexaddis"
                sx={{
                  width: { xs: "100px", md: "120px" },
                  height: "auto",
                  filter: "invert(1)",
                }}
              />
            </Link>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Company
            </Typography>
            <Link
              to="/about"
              smooth
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography variant="body2"
                sx={{
                  mb: 1,
                  fontSize: { xs: "0.875rem", sm: ".8rem" },
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#fb8122"
                  },
                }}
              >
                About
              </Typography>
            </Link>

            <Link
              to="/#testimonial"
              smooth
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography variant="body2"
                sx={{
                  mb: 1,
                  fontSize: { xs: "0.875rem", sm: ".8rem" },
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#fb8122"
                  },
                }}
              >
                Testimonial
              </Typography>
            </Link>
            <Link
              to="/#services"
              smooth
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography variant="body2"
                sx={{
                  mb: 1,
                  fontSize: { xs: "0.875rem", sm: ".8rem" },
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#fb8122"
                  },
                }}
              >
                Services
              </Typography>
            </Link>
            <Link
              to="/#contact"
              smooth
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography variant="body2"
                sx={{
                  mb: 1,
                  fontSize: { xs: "0.875rem", sm: ".8rem" },
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#fb8122"
                  },
                }}
              >
                Contact Us
              </Typography>
            </Link>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Our Services
            </Typography>

            <Link
              to="/websitedevelopment"
              smooth
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  fontSize: { xs: "0.875rem", sm: ".8rem" },
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#fb8122"
                  },
                }}
              >
                Website Design & Development
              </Typography>
            </Link>
            <Link
              to="/appdevelopment"
              smooth
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  fontSize: { xs: "0.875rem", sm: ".8rem" },
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#fb8122"
                  },
                }}
              >
                Mobile Appk Design & Development
              </Typography>
            </Link>

            <Link
              to="/logodesigning"
              smooth
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  fontSize: { xs: "0.875rem", sm: ".8rem" },
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#fb8122"
                  },
                }}
              >
                Logo Designing and Branding
              </Typography>
            </Link>
          </Grid>

          {/* Find Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}
            >
              Find Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                fontSize: { xs: '0.875rem', sm: '.8rem' },
              }}
            >
              <PhoneIcon sx={{ mr: 1, fontSize: '1rem', color: '#fb8122' }} />
              Phone: (+251) 953-431-572
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                fontSize: { xs: '0.875rem', sm: '.8rem' },
              }}
            >
              <EmailIcon sx={{ mr: 1, fontSize: '1rem', color: '#fb8122' }} />
              Email: nexaddis0@gmail.com
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                fontSize: { xs: '0.875rem', sm: '.8rem' },
              }}
            >
              <LocationOnIcon sx={{ mr: 1, fontSize: '1rem', color: '#fb8122' }} />
              Address: Addis Ababa, Ethiopia
            </Typography>
          </Grid>;
        </Grid>

        <Divider sx={{ my: 4, borderColor: "grey.800" }} />

        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
            p: "1rem 0",
          }}
        >
          <Typography variant="body2">
            © {getCurrentYear()} nexaddis
          </Typography>
          <Typography variant="body2">
            <Link
              to="/privacy"
              smooth
              style={{
                textDecoration: "none",
                color: "#ca6314",
                fontSize: { xs: "0.9rem", sm: ".9rem" },
                "&:hover": {
                  color: "#fb8122",
                }
              }}
            >
              Privacy Policy
            </Link>
          </Typography>
        </Box>

        {showScrollToTop && (
          <IconButton
            onClick={scrollToTop}
            zindex="99999"
            sx={{
              position: "fixed",
              bottom: { xs: 20, sm: 30 },
              right: { xs: 20, sm: 30 },
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                bgcolor: "#fb8122",
                color: "#fff",
              },
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        )}
      </Container>
    </Box>
  );
}
