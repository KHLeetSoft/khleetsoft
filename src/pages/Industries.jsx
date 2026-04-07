import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { heroBannerSx, heroContentZ } from '../theme/heroBannerSx';
import healthcareIcon from '../assets/healthcare-icon.svg';
import financeIcon from '../assets/finance-icon.svg';
import ecommerceIcon from '../assets/ecommerce-icon.svg';
import manufacturingIcon from '../assets/manufacturing-icon.svg';
import edtechIcon from '../assets/edtech-icon.svg';
import legalIcon from '../assets/legal-icon.svg';

const industries = [
  {
    title: 'Healthcare & MedTech',
    icon: healthcareIcon,
    description: 'Innovative solutions for healthcare providers, ensuring HIPAA compliance and enhanced patient care through digital transformation.',
    challenges: ['HIPAA compliance', 'Patient data security', 'Telemedicine apps'],
    features: [
      'EHR/EMR integrations for seamless patient data management',
      'AI diagnostics support tools for faster, more accurate assessments',
      'Pharmacy management systems to streamline medication workflows'
    ],
    cta: 'See Healthcare Case Studies →'
  },
  {
    title: 'Finance & FinTech',
    icon: financeIcon,
    description: 'Secure and scalable solutions for financial institutions, focusing on fraud prevention and regulatory compliance.',
    challenges: ['Fraud detection', 'Real-time transactions', 'Regulatory compliance'],
    features: [
      'Blockchain-based secure payments for tamper-proof transactions',
      'Automated risk assessment algorithms for proactive fraud prevention',
      'Banking CRM software to enhance customer engagement and compliance'
    ],
    cta: 'Talk to a FinTech Expert →'
  },
  {
    title: 'E-Commerce & Retail',
    icon: ecommerceIcon,
    description: 'End-to-end retail solutions that enhance customer experience and streamline operations across multiple channels.',
    challenges: ['Cart abandonment', 'Inventory sync', 'Personalized UX'],
    features: [
      'AI-powered recommendation engines to boost conversions',
      'Multi-channel POS systems for unified sales and inventory tracking',
      'Headless commerce architectures for flexible, scalable online stores'
    ],
    cta: 'Boost Your Sales Today →'
  },
  {
    title: 'Manufacturing & Logistics',
    icon: manufacturingIcon,
    description: 'Smart manufacturing and logistics solutions that optimize production processes and enhance operational efficiency.',
    challenges: ['Supply chain visibility', 'IoT device management'],
    features: [
      'Predictive maintenance software to minimize downtime',
      'Warehouse automation tools for efficient inventory management',
      'Fleet tracking systems for real-time logistics oversight'
    ],
    cta: 'Optimize Your Operations →'
  },
  {
    title: 'EdTech & E-Learning',
    icon: edtechIcon,
    description: 'Innovative educational technology solutions that transform learning experiences and improve educational outcomes.',
    challenges: ['Student engagement', 'Scalable LMS platforms'],
    features: [
      'Virtual classroom software for interactive online learning',
      'Gamified learning apps to boost motivation and retention',
      'AI-driven tutoring systems for personalized educational support'
    ],
    cta: 'Build the Future of Education →'
  },
  {
    title: 'LegalTech',
    icon: legalIcon,
    description: 'Advanced legal technology solutions that streamline legal processes and enhance practice management.',
    challenges: ['Document automation', 'Case management'],
    features: [
      'Contract review AI for faster, more accurate legal analysis',
      'Secure client portals for confidential communication',
      'Legal research chatbots to streamline case preparation'
    ],
    cta: 'Streamline Your Practice →'
  }
];

function Industries() {
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
            <Grid item xs={12} md={7}>
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
                Software tailored to your industry
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  mb: 4,
                  fontWeight: 400,
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                We focus on requirements first, then recommend technology—so solutions match your sector and operating
                model.
              </Typography>
              <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large">
                Tell Us Your Industry →
              </Button>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                {industries.map((industry, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      border: '1px solid',
                      borderColor: 'primary.dark',
                      borderRadius: 2,
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
                      boxShadow: 'none',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        boxShadow: '0 6px 20px rgba(114, 24, 47, 0.35)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={industry.icon}
                      alt=""
                      sx={{
                        width: 48,
                        height: 48,
                        mb: 1,
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.95,
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'inherit',
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: '0.875rem',
                        lineHeight: 1.35,
                      }}
                    >
                      {industry.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Industry Cards Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.shadows[15],
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Box
                    component="img"
                    src={industry.icon}
                    alt={industry.title}
                    sx={{
                      width: 64,
                      height: 64,
                      mb: 2.5
                    }}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}
                  >
                    {industry.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    {industry.description}
                  </Typography>
                  
                  {/* Challenges Section */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 1.5, color: 'text.primary' }}
                    >
                      Challenges Solved:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {industry.challenges.map((challenge, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            bgcolor: 'rgba(156, 35, 64, 0.08)',
                            color: 'primary.main',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.875rem',
                            fontWeight: 500
                          }}
                        >
                          {challenge}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Solutions Section */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 1.5, color: 'text.primary' }}
                    >
                      Our Solutions:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {industry.features.map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            display: 'flex',
                            alignItems: 'flex-start',
                            '&:before': {
                              content: '"•"',
                              color: 'primary.main',
                              fontWeight: 'bold',
                              mr: 1,
                              fontSize: '1.2em',
                              lineHeight: 1,
                            },
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {/* CTA Button */}
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 'auto',
                      py: 1,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        bgcolor: 'rgba(156, 35, 64, 0.08)'
                      }
                    }}
                  >
                    {industry.cta}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Industries;