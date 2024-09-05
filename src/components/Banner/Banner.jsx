import React from 'react';
import { Box, Container } from '@mui/material';
import LeftBanner from './LeftBanner';
import { bg1 } from '../../assets';

const Banner = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url(${bg1}) no-repeat center center/cover`,
          filter: 'brightness(0.6)',
          zIndex: -1,
        }}
      />

      <Container>
        {/* Main Banner Content */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 2, lg: 0 },
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'titleFont',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <LeftBanner />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
