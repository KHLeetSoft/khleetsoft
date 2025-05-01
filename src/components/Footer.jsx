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
  // { title: 'Careers', path: '/careers' },
  { title: 'FAQ', path: '/faq' },
  // { title: 'Legal', path: '/legal' },
  { title: 'Contact', path: '/contact' },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000000',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'block',
                mb: 2,
              }}
            >
              KH LeetSoft Innovation PVT LTD
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Empowering businesses with innovative software solutions and cutting-edge technology.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                color="inherit"
                component={Link}
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Grid container>
              {pages.map((page) => (
                <Grid item xs={6} key={page.path}>
                  <Link
                    component={RouterLink}
                    to={page.path}
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                      display: 'block',
                      mb: 1,
                    }}
                  >
                    {page.title}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: innovationleetsoft@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +91 6266966397
            </Typography>
            <Typography variant="body2">
              Address: New Sundar Nagar Kohka Bhilai,
Street : 29, H./No : 196/kh
Pin, 490023, Chhattisgarh
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{ borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.1)', mt: 4, pt: 2, textAlign: 'center' }}
        >
          © {new Date().getFullYear()} KH LeetSoft. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;