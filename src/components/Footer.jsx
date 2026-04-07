import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Industries', path: '/industries' },
  { title: 'Blog', path: '/blog' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Contact', path: '/contact' },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        bgcolor: '#eef2f6',
        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                color: 'text.primary',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'block',
                mb: 1.5,
                fontSize: '1.0625rem',
                letterSpacing: '-0.02em',
              }}
            >
              KH LeetSoft Innovation Pvt Ltd
            </Typography>
            <Typography variant="body1" sx={{ mb: 2.5, color: 'text.secondary', maxWidth: 400, lineHeight: 1.75, fontSize: '0.9375rem' }}>
              KH LeetSoft Innovation Pvt Ltd is a software development company based in Chhattisgarh, India. We design
              and build web applications, mobile apps, and custom systems for organisations that need dependable
              delivery and ongoing support.
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {[
                { icon: <FacebookIcon sx={{ fontSize: 20 }} />, href: 'https://facebook.com' },
                { icon: <TwitterIcon sx={{ fontSize: 20 }} />, href: 'https://twitter.com' },
                { icon: <LinkedInIcon sx={{ fontSize: 20 }} />, href: 'https://linkedin.com' },
                { icon: <InstagramIcon sx={{ fontSize: 20 }} />, href: 'https://instagram.com' },
              ].map((s) => (
                <IconButton
                  key={s.href}
                  component={Link}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    bgcolor: 'rgba(255, 255, 255, 0.45)',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(255, 255, 255, 0.85)',
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography
              variant="overline"
              sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: '0.08em', mb: 2, display: 'block' }}
            >
              Quick links
            </Typography>
            {pages.map((page) => (
              <Link
                key={page.path}
                component={RouterLink}
                to={page.path}
                underline="none"
                sx={{
                  display: 'block',
                  mb: 1.25,
                  color: 'text.secondary',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {page.title}
              </Link>
            ))}
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, display: 'block', fontSize: '0.75rem' }}>
              Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 1.5, color: 'text.secondary', fontSize: '0.9375rem' }}>
              <Link
                href="mailto:innovationleetsoft@gmail.com"
                underline="hover"
                sx={{ color: 'text.primary', fontWeight: 500 }}
              >
                innovationleetsoft@gmail.com
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1.5, color: 'text.secondary', fontSize: '0.9375rem' }}>
              <Link href="tel:+916266966397" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>
                +91 6266966397
              </Link>
              <Box component="span" sx={{ mx: 1, opacity: 0.4 }}>
                ·
              </Box>
              <Link href="tel:+917400743938" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>
                +91 7400743938
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.875rem' }}>
              New Sundar Nagar Kohka Bhilai, Street 29, H.No 196/kh
              <br />
              Pin 490023, Chhattisgarh, India
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: '1px solid rgba(15, 23, 42, 0.07)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} KH LeetSoft. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
