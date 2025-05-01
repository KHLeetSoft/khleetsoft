import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Divider,
} from '@mui/material';
import aboutBanner from '../assets/about-banner.svg';

const values = [
  {
    title: '🔥 Relentless Problem-Solving',
    description: 'We don\'t stop until it works. Our commitment to innovation and continuous improvement drives us to find the best solutions for our clients.',
  },
  {
    title: '🤝 Client-First Mindset',
    description: 'Your success is our success. We build trust and long-term relationships by putting our clients\'s needs at the forefront of everything we do.',
  },
  {
    title: '⚡ Speed Without Sacrifice',
    description: 'Fast delivery, never rushed quality. We ensure timely results while maintaining the highest standards of excellence in every project.',
  },
];

function About() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          color: 'white',
          py: { xs: 8, md: 10 },
          mb: 6,
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #9C2340 0%, #2C3E50 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(/src/assets/banner.svg)',
            backgroundSize: 'cover',
            opacity: 0.1,
            animation: 'pulse 3s infinite',
          },
          '@keyframes pulse': {
            '0%': { opacity: 0.1 },
            '50%': { opacity: 0.15 },
            '100%': { opacity: 0.1 },
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                  fontWeight: 700,
                  mb: 3,
                  background: 'linear-gradient(to right, #ffffff, #f0f0f0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                We Don't Just Build Software-We Solve Problems.
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  mb: 4,
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.6,
                }}
              >
                A team of passionate developers, designers, and strategists helping businesses thrive with technology.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={aboutBanner}
                alt="Our Team"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Company Overview */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              About KH LeetSoft
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              We are a leading software development company dedicated to delivering innovative solutions that help businesses thrive in the digital age. Our team of experts combines technical excellence with industry knowledge to create impactful solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component="img" src={aboutBanner} alt="About Us" sx={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>

        {/* Mission Statement */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            To empower businesses with scalable, secure, and innovative software solutions-delivered fast. We combine technical expertise with industry knowledge to create solutions that drive real impact.
          </Typography>
        </Box>

        {/* Vision Statement */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            A world where technology accelerates growth, not complicates it. We strive to create a future where our software removes barriers and enables clients to thrive in the digital age.
          </Typography>
        </Box>

        <Divider sx={{ mb: 8 }} />

        {/* Company Values */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 600,
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Company History */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            Our Journey
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            Every great company starts with a simple idea and a passion to make a difference. In 2025, I founded this company with a vision: to help businesses harness the power of technology and solve real-world problems through innovative software solutions.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            In less than a year, we have already built and launched three dynamic websites and one robust software product, each tailored to our clients' unique needs. Our journey is just beginning, but our commitment to quality, creativity, and client success drives everything we do. We're excited to keep growing and helping more businesses thrive in the digital age.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default About;