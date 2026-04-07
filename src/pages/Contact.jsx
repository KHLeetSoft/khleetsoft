import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  TextField,
  Button,
  Alert,
  Stack,
  Link,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const formCardSx = {
  height: '100%',
  p: { xs: 2.5, md: 3.5 },
  borderRadius: '8px',
  border: '1px solid rgba(15, 23, 42, 0.1)',
  bgcolor: 'background.paper',
  boxShadow: 'none',
};

const infoCardSx = {
  height: '100%',
  p: { xs: 2.5, md: 3.5 },
  borderRadius: '8px',
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
};

const infoLinkSx = {
  color: 'inherit',
  fontWeight: 600,
  fontSize: '0.9375rem',
  textUnderlineOffset: 3,
  opacity: 0.95,
  '&:hover': {
    opacity: 1,
    color: 'inherit',
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}>
          Contact
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', mb: 5, color: 'text.secondary', maxWidth: 520, mx: 'auto', lineHeight: 1.75 }}
        >
          For project enquiries, partnerships, or support, use the form or the details below. We aim to respond within
          two business days.
        </Typography>

        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={8}>
            <Box sx={formCardSx}>
              {submitted && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you for your message. We&apos;ll get back to you soon.
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ mt: 1 }}>
                      Send message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={infoCardSx}>
              <Typography variant="subtitle1" sx={{ mb: 2.5, fontWeight: 600, color: 'inherit' }}>
                Contact details
              </Typography>
              <Stack spacing={2.75} sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <LocationOnIcon sx={{ fontSize: 22, color: 'rgba(255,255,255,0.88)', flexShrink: 0, mt: 0.25 }} />
                  <Typography variant="body2" sx={{ lineHeight: 1.65, color: 'inherit', opacity: 0.92, fontWeight: 500 }}>
                    New Sundar Nagar Kohka Bhilai,
                    <br />
                    Street 29, H.No 196/kh
                    <br />
                    Pin 490023, Chhattisgarh
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <PhoneIcon sx={{ fontSize: 22, color: 'rgba(255,255,255,0.88)', flexShrink: 0, mt: 0.25 }} />
                  <Stack spacing={1}>
                    <Link href="tel:+916266966397" underline="hover" sx={infoLinkSx}>
                      +91 6266966397
                    </Link>
                    <Link href="tel:+917400743938" underline="hover" sx={infoLinkSx}>
                      +91 7400743938
                    </Link>
                  </Stack>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <EmailIcon sx={{ fontSize: 22, color: 'rgba(255,255,255,0.88)', flexShrink: 0, mt: 0.25 }} />
                  <Link href="mailto:innovationleetsoft@gmail.com" underline="hover" sx={{ ...infoLinkSx, wordBreak: 'break-all' }}>
                    innovationleetsoft@gmail.com
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
