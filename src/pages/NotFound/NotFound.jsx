import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '3rem', md: '6rem' }, // Responsive font size
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
        }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '1.2rem', md: '1.5rem' }, // Responsive font size
          color: '#555',
          marginBottom: '20px',
        }}
      >
        Oops! Page not found.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive font size
          color: '#777',
          marginBottom: '30px',
        }}
      >
        The page you are looking for might have been removed or is temporarily unavailable.
      </Typography>
      <Button
        variant="contained"
        onClick={handleGoHome}
        sx={{
          padding: '10px 20px',
          backgroundColor: '#fb8122',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#e76a18',
          },
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
