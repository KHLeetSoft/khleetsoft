import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

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
    // Here you would typically send the form data to your backend
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
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3rem' },
            fontWeight: 700,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            color: 'text.secondary',
            fontWeight: 400,
          }}
        >
          Get in touch with our team of experts
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                height: '100%',
                p: 2,
              }}
            >
              <CardContent>
                {submitted && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Thank you for your message. We'll get back to you soon!
                  </Alert>
                )}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
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
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
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
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                bgcolor: 'primary.main',
                color: 'white',
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                  Contact Information
                </Typography>

                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ mr: 2 }} />
                  <Typography>
                    New Sundar Nagar Kohka Bhilai, 
                    <br />
                    Street : 29, H./No : 196/kh
                    <br />
                    Pin, 490023, Chhattisgarh
                  </Typography>
                </Box>

                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 2 }} />
                  <Typography>+91 6266966397</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 2 }} />
                  <Typography>innovationleetsoft@gmail.com</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;