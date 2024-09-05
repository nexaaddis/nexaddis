import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

// assets
import designerPen from "../../assets/svg/Services/designerPen.svg";
import mobile from "../../assets/svg/Services/mobile.svg";
import website from "../../assets/svg/Services/website.svg";

export default function ServiceBox({ route, icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <img src={designerPen} alt="Roller Icon" style={{ width: '100%', height: 'auto' }} />;
      break;
    case "monitor":
      getIcon = <img src={website} alt="Monitor Icon" style={{ width: '100%', height: 'auto' }} />;
      break;
    case "browser":
      getIcon = <img src={mobile} alt="Browser Icon" style={{ width: '100%', height: 'auto' }} />;
      break;
    default:
      getIcon = <img src={mobile} alt="Default Icon" style={{ width: '100%', height: 'auto' }} />;
      break;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        borderRadius: 2,
        p: 2.5,
        mt: 2.5,
        transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          transform: 'none', // No scaling
        },
        '@media (max-width: 600px)': {
          p: 2, // Adjust padding for smaller screens
        },
      }}
    >
      <Box
        sx={{
          width: 70,
          height: 70,
          mb: 2.5,
        }}
      >
        {getIcon}
      </Box>
      <Typography
        variant="h6"
        sx={{
          mb: 1.25,
          color: '#333',
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: '#555',
          fontSize: 14,
          mb: 1.25,
        }}
      >
        {subtitle}
      </Typography>
      <Box sx={{ mt: 4, position: 'relative', width: '100%' }}>
        <Link
          to={route}
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fb8122',
            fontWeight: '600',
            fontSize: '.9rem',
            transition: 'transform 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#fb8122',
              mr: 1,
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: '600',
              transition: 'color 0.3s',
            }}
          >
            learn more
          </Typography>
          <ArrowForward sx={{ color: '#fb8122' }} />
        </Link>
      </Box>
    </Box>
  );
}
