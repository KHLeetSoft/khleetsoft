import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
} from '@mui/material';

const jobOpenings = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are seeking an experienced software engineer to join our team and help build innovative solutions for our clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '5+ years of experience in software development',
      'Strong proficiency in modern JavaScript frameworks',
      'Experience with cloud technologies (AWS, Azure, or GCP)',
    ],
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Looking for a strategic product manager to drive our product vision and roadmap.',
    requirements: [
      'Bachelor\'s degree in Business, Technology, or related field',
      '3+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership abilities',
    ],
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our design team to create beautiful and intuitive user experiences for our software products.',
    requirements: [
      'Bachelor\'s degree in Design or related field',
      '3+ years of UX/UI design experience',
      'Proficiency in design tools (Figma, Sketch)',
      'Strong portfolio demonstrating web and mobile design work',
    ],
  },
];

function Careers() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 600,
          }}
        >
          Join Our Team
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Build the future of software with us
        </Typography>

        <Grid container spacing={4}>
          {jobOpenings.map((job, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                        {job.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Chip label={job.department} color="primary" size="small" />
                        <Chip label={job.location} size="small" />
                        <Chip label={job.type} size="small" />
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ textTransform: 'none' }}
                    >
                      Apply Now
                    </Button>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {job.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Requirements:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                    {job.requirements.map((req, idx) => (
                      <Typography
                        component="li"
                        variant="body1"
                        key={idx}
                        sx={{ mb: 0.5 }}
                      >
                        {req}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Careers;