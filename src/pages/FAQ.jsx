import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqItems = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of software solutions including custom software development, digital transformation, cloud solutions, and enterprise integration. Our team specializes in creating tailored solutions that meet your unique business needs.',
  },
  {
    question: 'How long does a typical software development project take?',
    answer: 'Project timelines vary depending on the scope and complexity. A simple project might take 2-3 months, while more complex enterprise solutions can take 6-12 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages for all our software solutions. This includes regular updates, bug fixes, security patches, and technical support to ensure your software continues to perform optimally.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies including React, Angular, Node.js, Python, Java, and cloud platforms like AWS, Azure, and Google Cloud. We select the best technology stack based on your specific requirements.',
  },
  {
    question: 'How do you ensure the security of your software solutions?',
    answer: 'Security is a top priority. We follow industry best practices for secure coding, implement robust authentication and authorization, conduct regular security audits, and stay updated with the latest security protocols and compliance requirements.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with regular sprints and client check-ins. This includes requirements gathering, design, development, testing, and deployment phases. We maintain transparent communication throughout the process.',
  },
  {
    question: 'Do you offer custom pricing plans?',
    answer: 'Yes, we offer flexible pricing models tailored to your project needs. This can include fixed-price projects, time and materials billing, or retainer-based arrangements. We\'ll work with you to find the most suitable option.',
  },
  {
    question: 'How can I get started with your services?',
    answer: 'Getting started is easy! Simply contact us through our website or give us a call. We\'ll schedule an initial consultation to discuss your requirements, provide recommendations, and outline the next steps.',
  },
];

function FAQ() {
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
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Find quick answers to common questions about our services
        </Typography>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                '&:before': {
                  display: 'none',
                },
                boxShadow: 1,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;