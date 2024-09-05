import React from 'react';
import { Box, CardMedia } from '@mui/material';
import { designSvg } from '../../assets'
const RightBanner = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '50%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Decorative Blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-80px',
          right: '-150px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-60px',
          left: '-100px',
          width: '250px',
          height: '250px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          zIndex: 1,
        }}
      />

      {/* Image Section */}
      <CardMedia
        component="img"
        sx={{
          width: { xs: 300, md: 500 },
          height: { xs: 400, md: 680 },
          zIndex: 10,
          borderRadius: '10px',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
        }}
        image={designSvg}
        alt="Banner Image"
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: { xs: 350, md: 500 },
          height: { xs: 300, md: 500 },
          background: 'linear-gradient(to right, #1e2024, #202327)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          zIndex: 2,
        }}
      />
    </Box>
  );
}

export default RightBanner;
