import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Container, Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Components
import TestimonialBox from "./TestimonialBox";

// Assets
import {
  men1,
  men2,
  men3,
  men4,
  men5,
} from "../../assets";

export default function TestimonialSlider() {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "I am truly impressed with the website they built for my business. It’s clean, modern, and exactly what I needed. This will help me reach more customers. Thank you so much!",
      author: "Abdulrahman Yasin",
      imgSrc: men1,
    },
    {
      text: "The mobile app they developed for my shop is amazing! Now my customers can easily order from their phones. I am very satisfied with the quality and the service.",
      author: "Samuel Bekele",
      imgSrc: men2,
    },
    {
      text: "I needed a professional logo that represented my brand, and they delivered beyond my expectations. The logo looks great and has brought a fresh look to my business.",
      author: "Ahmed Mohammed",
      imgSrc: men3,
    },
    {
      text: "I’m so happy with the website they created for my small business. It’s user-friendly and visually appealing. My customers are also loving it. Highly recommended!",
      author: "Mulugeta Tekle",
      imgSrc: men4,
    },
    {
      text: "Their team designed a mobile app for my café, and it has made managing orders so much easier. I love the design and functionality. It's a great investment for my business!",
      author: "Jemal Ahmed",
      imgSrc: men5,
    },
  ];


  return (
    <div id="testimonial" style={{ padding: '4rem 0 4rem 0', width: "100%", backgroundColor: '#fff7f1' }}>
      <Container>
        <Box sx={{ mb: '1rem', textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            letterSpacing="1.5"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1.2rem' },
              mb: '0.5rem',
              color: 'var(--primary-color)',
              textTransform: 'uppercase',
            }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="h4"
            sx={{ mb: 5, fontWeight: "800", color: "#2a2f35" }}
          >
            What They Say?
          </Typography>
          <Typography variant="body1" mb={4} color="#3a3f45">
            Hear from our clients and partners about their experiences with our
            products.
            <br />
            Your feedback helps us grow and improve.
          </Typography>
        </Box>
        <SliderWrapper>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <LogoWrapper key={index} className="flexCenter">
                <TestimonialBox
                  text={testimonial.text}
                  author={testimonial.author}
                  imgSrc={testimonial.imgSrc}
                />
              </LogoWrapper>
            ))}
          </Slider>
          <ArrowWrapper>
            <IconButton
              onClick={() => sliderRef.current.slickPrev()}
              sx={{
                color: "var(--primary-color)",
                marginRight: "20px",
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={() => sliderRef.current.slickNext()}
              sx={{ color: "var(--primary-color)" }}
            >
              <ArrowForwardIos />
            </IconButton>
          </ArrowWrapper>
        </SliderWrapper>
      </Container>
    </div>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
`;

const LogoWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: -30px;  /* Positioned at the bottom */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;
