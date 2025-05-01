import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const blogPosts = [
  {
    title: 'The Future of Software Development',
    date: 'June 15, 2023',
    excerpt: 'Explore the latest trends in software development and how they are shaping the future of technology.',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    content: `The software development landscape is rapidly evolving with emerging technologies and methodologies. This article explores key trends including:

• AI-Driven Development: How artificial intelligence is revolutionizing code generation and testing
• Low-Code/No-Code Platforms: Democratizing software development for non-technical users
• DevOps Evolution: The latest practices in continuous integration and deployment
• Cloud-Native Architecture: Building scalable and resilient applications

Stay ahead of the curve by understanding these transformative trends and their impact on the industry.`
  },
  {
    title: 'Maximizing Business Efficiency with Cloud Solutions',
    date: 'June 10, 2023',
    excerpt: 'Learn how cloud solutions can transform your business operations and drive growth.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    content: `Cloud computing has become essential for modern business operations. This comprehensive guide covers:

• Cloud Migration Strategies: Planning and executing a successful transition
• Cost Optimization: Maximizing ROI from cloud investments
• Security Best Practices: Protecting your data in the cloud
• Hybrid Cloud Solutions: Combining on-premise and cloud resources effectively

Discover how to leverage cloud technology to enhance your business efficiency and competitive advantage.`
  },
  {
    title: 'Digital Transformation Success Stories',
    date: 'June 5, 2023',
    excerpt: 'Real-world examples of successful digital transformation projects and their impact.',
    category: 'Case Studies',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80',
    content: `Learn from organizations that have successfully navigated digital transformation. This article features:

• Manufacturing Company's IoT Implementation: 50% reduction in maintenance costs
• Retail Chain's E-commerce Integration: 200% increase in online sales
• Healthcare Provider's Digital Patient Experience: Improved patient satisfaction by 40%
• Financial Institution's Cloud Migration: Enhanced security and scalability

Gain insights from these real-world examples to guide your own digital transformation journey.`
  },
  {
    title: 'Cybersecurity Best Practices for Enterprises',
    date: 'June 1, 2023',
    excerpt: 'Essential cybersecurity measures to protect your business in the digital age.',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    content: `Protect your enterprise with comprehensive cybersecurity measures. This guide covers:

• Zero Trust Architecture: Implementing modern security frameworks
• Employee Training: Building a security-conscious culture
• Incident Response: Preparing for and managing security breaches
• Compliance Requirements: Meeting industry standards and regulations

Stay protected against evolving cyber threats with these essential security practices.`
  },
];

function Blog() {
  const [expandedPost, setExpandedPost] = React.useState(null);

  const handleReadMore = (post) => {
    setExpandedPost(expandedPost === post ? null : post);
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 600,
          }}
        >
          Latest Insights & News
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      mb: 2,
                    }}
                  >
                    {post.category}
                  </Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mb: 1, display: 'block' }}
                  >
                    {post.date}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {expandedPost === post ? post.content : post.excerpt}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleReadMore(post)}
                    sx={{
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: 'rgba(156, 35, 64, 0.08)',
                      },
                    }}
                  >
                    {expandedPost === post ? 'Show Less' : 'Read More'}
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

export default Blog;