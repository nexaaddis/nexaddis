import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Box, Typography, Button } from '@mui/material';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Boost Your Online Presence.",
      "Elevate Your Brand Identity.",
      "Enhance Customer Engagement.",
      "Maximize Efficiency and Growth.",
      "Achieve Seamless Integration.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        padding: { xs: 2, md: 4 },
        color: 'var(--text-color)',
        textAlign: 'center',
        mt: { xs: 7, md: 2 },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
          color: 'var(--text-muted-color)',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        NEXADDIS
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: '800',
          fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem', lg: '3.1rem' },
          color: '#e1e2e2',
          lineHeight: 1.2,
          fontFamily: 'Roboto, sans-serif',
          position: 'relative',
        }}
      >
        Boosting Your Business<br></br>with Digital Innovation<span color="var(--text-muted-color)"></span>
      </Typography>

      <Box
        sx={{
          textAlign: 'center',
          display: 'inline-block',
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
          maxWidth: '100%',
          mt: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: '700',
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
            color: 'var(--primary-color)',
            lineHeight: 1.2,
            display: 'inline',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          {text}
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="var(--primary-color)"
          />
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.1rem' },
          color: 'var(--text-subtitle-color)',
          lineHeight: 1.6,
          maxWidth: '600px',
          textAlign: 'center',
          mt: {xs: '2rem', md: '1rem'},
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        Delivering top-tier software and design services in Ethiopia.
      </Typography>

      {/* Unique Button */}
      <Button
        sx={{
          textTransform: "uppercase",
          border: "1px solid var(--primary-color)",
          borderRadius: "12px",
          fontWeight: "600",
          px: {xs: "1rem", md: "1.5rem"},
          py: {xs: "0.5rem", md: "0.65rem"},
          mt: {xs: "2rem", md: "1rem"},
          backgroundColor: "var(--primary-color)",
          color: "white",
          "&:hover": {
            backgroundColor: "transparent",
            color: "var(--primary-color)",
          },
        }}
        href='#contact'
      >
        Contact Us
      </Button>

    </Box>
  );
};

export default LeftBanner;
