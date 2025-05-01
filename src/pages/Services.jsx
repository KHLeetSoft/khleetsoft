import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
  Stack,
} from '@mui/material';

const services = [
  {
    title: 'Website Development',
    description: 'From stunning portfolios to high-traffic e-commerce stores—we build websites that grow your business.',
    details: [
      'Custom Website Development',
      'E-Commerce Solutions',
      'Landing Page Optimization',
      'Website Maintenance & Support',
    ],
    timeline: [
      { week: 1, phase: 'Discovery & Planning', tasks: ['Requirements gathering', 'Site architecture', 'Technology selection'] },
      { week: 2, phase: 'Design', tasks: ['Wireframes', 'UI/UX design', 'Client feedback'] },
      { week: 3, phase: 'Development', tasks: ['Frontend coding', 'CMS integration', 'Testing'] },
      { week: 4, phase: 'Launch', tasks: ['Final testing', 'Deployment', 'Training'] },
    ],
    features: {
      cms: ['WordPress', 'Shopify', 'Custom CMS'],
      design: ['Responsive design', 'Mobile-first approach', 'SEO-friendly structure'],
      support: ['3-month post-launch support', '24/7 monitoring', 'Performance optimization'],
    },
  },
  {
    title: 'Software Development',
    description: 'Tailored software solutions that automate workflows and scale with your business.',
    details: [
      'Custom SaaS Development',
      'Enterprise Software',
      'API Integrations',
      'Legacy Software Modernization',
    ],
  },
  {
    title: 'Mobile App Development',
    description: 'Transform your idea into a top-ranked mobile app—faster and under budget.',
    details: [
      'iOS & Android Apps',
      'MVP Development',
      'App Store Optimization',
      'App Maintenance',
    ],
    techStack: {
      native: {
        title: 'Native Development',
        platforms: ['Swift for iOS', 'Kotlin for Android'],
        benefits: ['Best Performance', 'Full Platform Features', 'Enhanced Security'],
      },
      crossPlatform: {
        title: 'Cross-Platform',
        platforms: ['Flutter', 'React Native'],
        benefits: ['Code Reusability', 'Faster Development', 'Cost-Effective'],
      },
    },
    appStore: {
      submission: ['App Store Optimization', 'Store Listing Setup', 'Marketing Screenshots'],
      requirements: ['Technical Review', 'Content Guidelines', 'Privacy Policy'],
      timeline: '2-3 weeks for store approval',
    },
    demo: {
      type: 'Figma Interactive Prototype',
      features: ['User Flow Demo', 'Interactive Elements', 'Real-time Updates'],
    },
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Get found first on Google—we turn clicks into customers.',
    details: [
      'Technical SEO Audits',
      'Keyword Strategy & Content SEO',
      'Local SEO',
      'Link Building',
    ],
    keywordStrategy: {
      example: {
        target: 'best CRM software',
        currentRanking: 32,
        targetRanking: 5,
        timeline: '6 months',
      },
      process: [
        'Keyword Research & Analysis',
        'Competitor Analysis',
        'Content Optimization',
        'Performance Tracking',
      ],
    },
    reporting: {
      tools: ['Google Analytics', 'SEMrush', 'Ahrefs'],
      metrics: ['Organic Traffic', 'Keyword Rankings', 'Conversion Rate', 'ROI'],
      frequency: 'Monthly detailed reports',
    },
    guarantee: {
      traffic: '50% increase in organic traffic',
      timeline: '6 months',
      commitment: 'Free service until goals are met',
    },
  },
  {
    title: 'UI/UX Design',
    description: "Designs that don't just look good—they drive action.",
    details: [
      'Wireframing & Prototyping',
      'User Research & Testing',
      'Redesigns for Better Engagement',
      'Mobile-First Design',
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploy faster, scale smarter, and sleep soundly with our cloud expertise.',
    details: [
      'Cloud Migration',
      'CI/CD Pipeline Setup',
      'Server Management',
      'Infrastructure Automation',
    ],
  },
  {
    title: 'IT Support & Cybersecurity',
    description: 'Your business secured—proactive protection and instant support.',
    details: [
      'Help Desk Support',
      'Penetration Testing',
      'Compliance',
      'Security Monitoring',
    ],
  },
  {
    title: 'Emerging Technologies',
    description: 'Stay ahead with cutting-edge tech built for your needs.',
    details: [
      'AI/ML Integration',
      'Blockchain Development',
      'IoT Solutions',
      'AR/VR Applications',
    ],
  },
];

function Services() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #9C2340 0%, #2C3E50 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Transform Your Business with Custom Software Solutions
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                From concept to deployment in weeks, not months. Backed by 24/7 support.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                >
                  Get Free Consultation
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'grey.100',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  View Our Work
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            color: 'text.secondary',
            fontWeight: 400,
          }}
        >
          Comprehensive software solutions to drive your business forward
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600, color: 'primary.main' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                  >
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      Key Features:
                    </Typography>
                    <Grid container spacing={1}>
                      {service.details.map((detail, idx) => (
                        <Grid item xs={6} key={idx}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              '&:before': {
                                content: '"•"',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                width: '1em',
                                marginLeft: '-1em',
                              },
                            }}
                          >
                            {detail}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            py: 6,
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Ready to Start Your Project?
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            Let's discuss how we can help you achieve your goals
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Contact Us Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;