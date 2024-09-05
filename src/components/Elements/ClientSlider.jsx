import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import {
  git,
  mui,
  mysql,
  nodejs,
  nextjs,
  netlify,
  vercel,
  python,
  github,
  react2,
} from '../../assets';

// Styled Components using MUI's system
const StyledSliderContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  backgroundColor: '#fafafa',
  padding: '20px 0',
  borderRadius: '10px',
  marginTop: '20px',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    padding: '15px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 0',
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 10px',
  width: '100px',
  height: '60px',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    width: '80px',
    height: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '40px',
  },
}));

const ImgStyle = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  filter: 'grayscale(100%)',
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: 'grayscale(0%)',
  },
});

// Main Component
export default function ClientSlider() {
  const sliderRef = useRef(null);
  const theme = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);

      if (sliderRef.current) {
        if (scrollTop > lastScrollTop) {
          sliderRef.current.slickNext();
        } else {
          sliderRef.current.slickPrev();
        }
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: { xs: 'center', md: 'center', lg: 'left' }, mb: 4 }}>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
            mb: '0.5rem',
            color: 'var(--primary-color)',
            textTransform: 'uppercase',
          }}
        >
          Technology
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: '700',
            fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' }
          }}
        >
          Technologies We Use
        </Typography>
        <Typography variant="body1" mt={1} color="#3a3f45" maxWidth="600px">
          We use modern technologies like Python, React, and Material-UI to build fast, responsive, and reliable projects that work well on any device.
        </Typography>
      </Box>

      <StyledSliderContainer>
        <Slider {...settings} ref={sliderRef}>
          {[
            git,
            mui,
            mysql,
            nodejs,
            nextjs,
            netlify,
            vercel,
            python,
            github,
            react2,
          ].map((logo, index) => (
            <LogoWrapper key={index}>
              <ImgStyle src={logo} alt={`client logo ${index + 1}`} />
            </LogoWrapper>
          ))}
        </Slider>
      </StyledSliderContainer>
    </Container>
  );
}
