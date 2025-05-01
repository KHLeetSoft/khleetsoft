import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
} from '@mui/material';
import bannerImage from '../assets/banner.svg';
import serviceIcons from '../assets/service-icons.svg';
import { Link as RouterLink } from 'react-router-dom';

const features = [
  {
    title: 'One-Click Integrations',
    description: 'Connect to Salesforce, Slack, and more in minutes. Seamlessly integrate your favorite tools with our platform.',
    icon: '🔌'
  },
  {
    title: 'Custom Dashboards',
    description: 'Build powerful reports without coding using our intuitive drag-and-drop tools. Visualize your data your way.',
    icon: '📊'
  },
  {
    title: 'AI Predictions',
    description: 'Leverage advanced machine learning to forecast trends and make data-driven decisions before they happen.',
    icon: '🤖'
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Keep your data safe with advanced encryption, role-based access control, and comprehensive security features.',
    icon: '🛡️'
  },
];

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          color: 'white',
          py: { xs: 8, md: 10 },
          mb: 4,
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
          <Box sx={{ maxWidth: 'md', mx: 'auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
              Transform Your Business with Modern Software Solutions
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                mb: 5,
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6,
              }}
            >
              Empower your enterprise with cutting-edge technology and innovative digital solutions
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 6 }}>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  fontSize: '1.1rem',
                  py: 1.75,
                  px: 4,
                  fontWeight: 600,
                  boxShadow: '0 4px 14px 0 rgba(44, 62, 80, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px 0 rgba(44, 62, 80, 0.4)',
                  },
                }}
              >
                Get Started Now
              </Button>
              <Button
                component={RouterLink}
                to="/services"
                variant="outlined"
                size="large"
                sx={{
                  fontSize: '1.1rem',
                  py: 1.75,
                  px: 4,
                  color: 'white',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Explore Services
              </Button>
            </Box>
            {/* <Box sx={{ opacity: 0.9 }}>
              <Typography variant="subtitle1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
                Trusted by Industry Leaders
              </Typography>
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center' }}>
                {['Microsoft', 'AWS', 'Google Cloud', 'Oracle'].map((partner) => (
                  <Typography
                    key={partner}
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: 500,
                      letterSpacing: 1,
                    }}
                  >
                    {partner}
                  </Typography>
                ))}
              </Box>
            </Box> */}
          </Box>
        </Container>
      </Box>

      {/* Problem/Solution Section */}
      <Container maxWidth="lg" sx={{ mb: 8, py: 6 }}>
        <Grid container spacing={4}>
          {/* Problems Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                p: 4,
                borderRadius: 2,
                bgcolor: 'rgba(44, 62, 80, 0.03)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  fontWeight: 600,
                  color: '#2C3E50',
                }}
              >
                Facing Business Technology Challenges?
              </Typography>
              <Box sx={{ mb: 3 }}>
                {[
                  'Legacy systems slowing down your operations',
                  'Disconnected software causing data silos',
                  'Manual processes consuming valuable time',
                  'Security concerns keeping you up at night',
                ].map((point, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      '&:last-child': { mb: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: 'rgba(44, 62, 80, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#2C3E50',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                        }}
                      >
                        {index + 1}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Solutions Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                p: 4,
                borderRadius: 2,
                bgcolor: 'rgba(156, 35, 64, 0.03)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  fontWeight: 600,
                  color: '#9C2340',
                }}
              >
                Our Solution
              </Typography>
              <Box sx={{ mb: 3 }}>
                {[
                  'Modern, scalable software tailored to your needs',
                  'Seamless integration across all systems',
                  'Automated workflows that save time and reduce errors',
                  'Enterprise-grade security and compliance',
                ].map((solution, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      '&:last-child': { mb: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: 'rgba(156, 35, 64, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#9C2340',
                          fontSize: '1rem',
                          fontWeight: 600,
                        }}
                      >
                        ✓
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                      }}
                    >
                      {solution}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mt: 3,
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 4,
                  fontWeight: 600,
                  bgcolor: '#9C2340',
                  '&:hover': {
                    bgcolor: '#7a1c33',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px 0 rgba(156, 35, 64, 0.3)',
                  },
                }}
              >
                Schedule a Consultation
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Key Features Section */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                backgroundColor: 'primary.main',
                margin: '16px auto',
                borderRadius: '2px'
              }
            }}
          >
            Key Features
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 8 },
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}
          >
            Powerful tools and capabilities to transform your business and streamline operations
          </Typography>
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }}
            sx={{
              display: { xs: 'flex' },
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'stretch'
            }}
          >
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      borderColor: 'primary.main',
                      '& .feature-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: 'primary.main'
                      }
                    },
                  }}
                >
                  <CardContent 
                    sx={{ 
                      textAlign: 'center', 
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <Typography
                      className="feature-icon"
                      sx={{
                        fontSize: { xs: '3.5rem', md: '4rem' },
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'inline-block',
                        color: 'text.primary',
                        mb: 1
                      }}
                    >
                      {feature.icon}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        mb: 1
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Social Proof Section */}

    </Box>
  );
}

export default Home;