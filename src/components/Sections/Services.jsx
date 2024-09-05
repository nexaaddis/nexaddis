import React from "react";
import styled from "styled-components";
import { Container, Box, Typography, Grid } from "@mui/material";

// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";


export default function Services() {
  return (
    <Wrapper id="services">
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: '#f3f3f3',
          zIndex: -1,
        }}
      />

      {/* Service Section */}
      <Section sx={{ p: '5rem 0' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: '2rem', textAlign: { xs: "center", md: "center", lg: 'left' } }}>
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
              Leading Software Solutions
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: '700', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' }, color: '#1c2229' }}
            >
              Turning Ideas into Reality
            </Typography>
            <Typography variant="body1" mt={1} color="#3a3f45">
              We build innovative software tailored to your needs, helping your business thrive in the digital age.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="roller"
                title="Designing"
                subtitle="We create impactful visual designs that clearly communicate your brand’s message and connect with your target audience."
                route="/logodesigning"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="monitor"
                title="Web Development"
                subtitle="Our team builds responsive and user-friendly websites that enhance your online presence and effectively showcase your business."
                route="/websitedevelopment"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="browser"
                title="Mobile Development"
                subtitle="We develop robust mobile applications that bring your services to your customers' fingertips, ensuring a seamless experience."
                route="/appdevelopment"
              />
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Slider */}
      <Section bgcolor="#fafafa">
        <ClientSlider />
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section = styled(Box)`
  padding: 4rem 0;
`;

