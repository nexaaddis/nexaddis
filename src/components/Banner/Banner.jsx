import React from 'react';
import { Box, Container } from '@mui/material';
import LeftBanner from './LeftBanner';
import { bg1 } from '../../assets';

const Banner = () => {
  return (
    <div id="home" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url(${bg1}) no-repeat center center/cover`,
          filter: 'brightness(0.6)',
          margin: 0,
          zIndex: -1,
        }}
      />
      <Container>
        <Box
          id="home"
          sx={{
            width: '100%',
            pt: 10,
            pb: 20,
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 2, lg: 0 },
            alignItems: 'center',
            fontFamily: 'titleFont',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
            }}
          >
            <LeftBanner />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
