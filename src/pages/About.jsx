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
import { heroBannerSx, heroContentZ } from '../theme/heroBannerSx';

/** Banner SVG is 3:1 — limit width so the card stays a slim horizontal strip */
const aboutBannerWrapSx = {
  width: '100%',
  maxWidth: { xs: '100%', sm: 440, md: 400 },
  mx: { xs: 0, md: 'auto' },
  borderRadius: 2,
  overflow: 'hidden',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
  aspectRatio: '3 / 1',
};

const aboutBannerImgSx = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  display: 'block',
};

const values = [
  {
    title: 'Clear ownership',
    description:
      'We take responsibility for delivery: scope, timelines, and communication are agreed up front and reviewed as the work progresses.',
  },
  {
    title: 'Client alignment',
    description:
      'We prioritise understanding your operations and constraints so the software fits your team—not the reverse.',
  },
  {
    title: 'Practical quality',
    description:
      'We balance speed with maintainability: code and architecture you can extend, with testing and documentation appropriate to the risk.',
  },
];

function About() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          ...heroBannerSx,
          py: { xs: 8, md: 10 },
          mb: 6,
        }}
      >
        <Container maxWidth="lg" sx={heroContentZ}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.35rem', md: '2.65rem' },
                  fontWeight: 600,
                  mb: 3,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  color: 'text.primary',
                }}
              >
                Software development with a practical focus
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.125rem', sm: '1.25rem' },
                  mb: 4,
                  fontWeight: 400,
                  color: 'text.secondary',
                  lineHeight: 1.65,
                }}
              >
                KH LeetSoft Innovation Pvt Ltd builds custom web and mobile solutions for businesses that need reliable
                delivery and straightforward collaboration.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'stretch', md: 'flex-end' } }}>
              <Box sx={aboutBannerWrapSx}>
                <Box component="img" src={aboutBanner} alt="" sx={aboutBannerImgSx} aria-hidden />
              </Box>
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
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
              The company is registered as a private limited entity in India and works with clients on bespoke software:
              from internal tools and customer portals to mobile apps and integrations. We emphasise clear scoping,
              staged delivery, and post-launch support where required.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'stretch', md: 'flex-end' } }}>
            <Box sx={aboutBannerWrapSx}>
              <Box component="img" src={aboutBanner} alt="" sx={aboutBannerImgSx} aria-hidden />
            </Box>
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
          <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            To deliver software that organisations can rely on day to day: secure enough for production, documented
            enough to hand over, and flexible enough to evolve with the business.
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
          <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            To be a trusted engineering partner for small and mid-sized organisations—known for honest estimates,
            consistent delivery, and long-term relationships with clients.
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
                    transition: 'border-color 0.2s ease',
                    '&:hover': { borderColor: 'rgba(15, 23, 42, 0.14)' },
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
            Company background
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            KH LeetSoft was founded to offer structured software services to businesses that outgrow off-the-shelf tools
            but do not need an oversized vendor. We keep teams lean, communicate directly with stakeholders, and invest
            in repeatable practices around requirements, testing, and releases.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            The company has delivered multiple web properties and custom products for clients across different sectors.
            We continue to focus on quality of delivery, transparent timelines, and support after go-live.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default About;