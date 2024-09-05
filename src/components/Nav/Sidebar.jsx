import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// assets
import { mainLogo } from "../../assets";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const navigate = useNavigate();

  const handleNavigation = (route, section) => {
    toggleSidebar(!sidebarOpen);
    navigate(route);

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "350px" },
        height: "100vh",
        position: "fixed",
        top: 0,
        right: sidebarOpen ? 0 : "-100%",
        backgroundColor: "#1c2229",
        color: "#f1f1f1",
        display: "flex",
        flexDirection: "column",
        padding: 3,
        transition: "right 0.3s ease",
        overflowY: "auto",
        zIndex: 10002,
        "@media (max-width: 400px)": {
          width: "100%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box
          component="img"
          src={mainLogo}
          alt="Nexaddis photo"
          sx={{
            width: { xs: "100px", md: "120px" },
            height: "auto",
            filter: "invert(1)",
          }}
        />
        <IconButton
          onClick={() => toggleSidebar(!sidebarOpen)}
          sx={{ color: "#f1f1f1" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {[
            { label: "Home", route: "/", section: "home" },
            { label: "About", route: "/about", section: "about" },
            { label: "Services", route: "/home", section: "services" },
            { label: "Projects", route: "/home", section: "projects" },
            { label: "Testimonials", route: "/home", section: "testimonial" },
          ].map(({ label, route, section }) => (
            <Button
              key={label}
              onClick={() => handleNavigation(route, section)}
              sx={{
                color: "#f1f1f1",
                fontWeight: "600",
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                marginBottom: "16px",
                padding: "10px 20px",
                cursor: "pointer",
                transition: "color 0.3s ease",
                textDecoration: "none",
                textTransform: "capitalize",
                "&:hover": {
                  color: "#fb8122",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <Button
            href="/contact"
            variant="contained"
            sx={{
              backgroundColor: "#fb8122",
              color: "#ffffff",
              borderRadius: "12px",
              padding: "8px 16px",
              fontWeight: "600",
              fontSize: { xs: "0.8rem", sm: ".85rem" },
              transition: "color 0.5s ease, backgroundColor 0.5s ease",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#fb8122",
              },
            }}
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box >
  );
}
