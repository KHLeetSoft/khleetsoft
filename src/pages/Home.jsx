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
  Avatar,
} from '@mui/material';
import HubOutlined from '@mui/icons-material/HubOutlined';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import PsychologyOutlined from '@mui/icons-material/PsychologyOutlined';
import SecurityOutlined from '@mui/icons-material/SecurityOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SEOHelmet from '../components/SEOHelmet';
import { heroBannerSx, heroContentZ } from '../theme/heroBannerSx';
import { Link as RouterLink } from 'react-router-dom';

const features = [
  {
    title: 'Integrations & APIs',
    description:
      'Connect your systems with stable APIs, third-party services, and data flows that match how your teams actually work.',
    Icon: HubOutlined,
  },
  {
    title: 'Web applications',
    description:
      'Business portals, admin tools, and customer-facing sites—built for performance, clarity, and maintainability.',
    Icon: DashboardOutlined,
  },
  {
    title: 'Automation & analytics',
    description:
      'Reduce manual work with workflow automation, reporting, and data tooling suited to your operations.',
    Icon: PsychologyOutlined,
  },
  {
    title: 'Security & reliability',
    description:
      'Sensible security practices, access control, and maintenance so your software stays trustworthy over time.',
    Icon: SecurityOutlined,
  },
];

function Home() {
  return (
    <Box>
      <SEOHelmet
        title="Home"
        description="KH LeetSoft Innovation Pvt Ltd — custom software, web, and mobile development in India. Clear scoping, structured delivery, and long-term support for businesses and teams."
        keywords="software development company India, custom software, web development, mobile app development, Chhattisgarh, enterprise software, IT services"
        canonicalUrl="/"
      />

      {/* Hero */}
      <Box
        sx={{
          ...heroBannerSx,
          py: { xs: 9, md: 11 },
          mb: { xs: 1, md: 2 },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', ...heroContentZ }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              display: 'block',
              mb: 2.5,
              fontSize: { xs: '0.8125rem', sm: '0.875rem' },
            }}
          >
            KH LeetSoft Innovation Pvt Ltd
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.15rem' },
              fontWeight: 600,
              mb: 3,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'text.primary',
            }}
          >
            Custom software development for your business
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.0625rem', sm: '1.125rem' },
              mb: 4,
              fontWeight: 400,
              color: 'text.secondary',
              lineHeight: 1.75,
              maxWidth: 580,
              mx: 'auto',
            }}
          >
            We are an India-based software company focused on web and mobile applications, integrations, and ongoing
            support. We work with clear requirements, agreed milestones, and direct communication—so you know what to
            expect at each stage.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
            <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large">
              Request a consultation
            </Button>
            <Button component={RouterLink} to="/services" variant="outlined" color="primary" size="large">
              View services
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Problem / Solution */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="overline" sx={{ color: 'text.secondary', mb: 1.5, display: 'block' }}>
                Common situations
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, color: 'text.primary' }}>
                When software becomes a constraint
              </Typography>
              <Stack spacing={1.75}>
                {[
                  'Legacy systems that are costly to change or extend',
                  'Disconnected tools and duplicate data entry',
                  'Processes that still rely heavily on spreadsheets or manual steps',
                  'Pressure to improve security, access control, or uptime',
                ].map((point, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      py: 1.25,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:last-of-type': { borderBottom: 'none', pb: 0 },
                    }}
                  >
                    <Typography
                      sx={{
                        minWidth: 28,
                        color: 'text.secondary',
                        fontSize: '0.9375rem',
                        fontWeight: 700,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 0.15, fontSize: '1rem' }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
                How we work
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, color: 'text.primary' }}>
                Structured delivery you can follow
              </Typography>
              <Stack spacing={1.75} sx={{ mb: 3 }}>
                {[
                  'Discovery and scope aligned to your priorities and budget',
                  'Design and development with regular checkpoints',
                  'Testing, deployment, and handover with documentation where needed',
                  'Optional support and iterations after go-live',
                ].map((solution, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 22, mt: 0.15, flexShrink: 0 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                      {solution}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large" fullWidth>
                Enquire about a project
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features */}
      <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 4, md: 6 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 2 }}>
              Services at a glance
            </Typography>
            <Typography variant="h2" sx={{ color: 'text.primary', mb: 2.5 }}>
              Where we typically assist
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.75, fontSize: '1.0625rem' }}>
              Typical engagements include greenfield products, modernisation of existing systems, and integrations. We
              tailor the stack and team size to the project—not the other way around.
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {features.map(({ title, description, Icon }, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'background.paper',
                    transition: 'border-color 0.2s ease',
                    '&:hover': {
                      borderColor: 'rgba(15, 23, 42, 0.14)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        width: 52,
                        height: 52,
                        mb: 2.5,
                        borderRadius: 2,
                        bgcolor: 'rgba(156, 35, 64, 0.08)',
                        color: 'primary.main',
                      }}
                    >
                      <Icon sx={{ fontSize: 28 }} />
                    </Avatar>
                    <Typography variant="subtitle1" component="h3" sx={{ mb: 1.25, color: 'text.primary' }}>
                      {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.9375rem' }}>
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Bottom CTA — full width, very light red, Fab actions */}
      <Box
        sx={{
          width: '100%',
          py: { xs: 6, md: 8 },
          bgcolor: '#f5f7fa',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              width: '100%',
              px: { xs: 2.5, sm: 3, md: 4 },
              py: { xs: 3, md: 4 },
              borderRadius: 1,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 3, md: 4 }}
              alignItems={{ xs: 'stretch', md: 'center' }}
              justifyContent="space-between"
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: { md: '50%' } }}>
                <Typography variant="h3" sx={{ mb: 1.5, color: 'text.primary', fontWeight: 600 }}>
                  Next step
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Share a short outline of your needs. We will respond with questions, a suggested approach, and
                  indicative timelines—without obligation.
                </Typography>
              </Box>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                flexWrap="wrap"
                justifyContent={{ xs: 'center', md: 'flex-end' }}
                alignItems="stretch"
                sx={{ width: { xs: '100%', md: 'auto' } }}
              >
                <Button
                  component="a"
                  href="tel:+916266966397"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  startIcon={<PhoneIcon />}
                >
                  Call
                </Button>
                <Button
                  component="a"
                  href="mailto:innovationleetsoft@gmail.com"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  startIcon={<EmailIcon />}
                >
                  Email
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  size="medium"
                  startIcon={<ChatIcon />}
                >
                  Enquiry form
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
