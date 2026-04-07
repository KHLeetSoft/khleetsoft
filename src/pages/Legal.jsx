import React from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
} from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`legal-tabpanel-${index}`}
      aria-labelledby={`legal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function Legal() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          Legal Information
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Our commitment to privacy and terms of service
        </Typography>

        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <Tab label="Privacy Policy" />
            <Tab label="Terms of Service" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Typography variant="h6" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography paragraph>
              At KH LeetSoft, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Information We Collect
            </Typography>
            <Typography paragraph>
              We collect information that you provide directly to us, including name, email address, and company information when you contact us or use our services.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              How We Use Your Information
            </Typography>
            <Typography paragraph>
              We use the information we collect to provide and improve our services, communicate with you, and ensure security of our platform.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Data Security
            </Typography>
            <Typography paragraph>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Typography variant="h6" gutterBottom>
              Terms of Service
            </Typography>
            <Typography paragraph>
              By accessing and using KH LeetSoft's services, you agree to be bound by these terms and conditions.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Use of Services
            </Typography>
            <Typography paragraph>
              Our services are provided for business purposes. You agree to use them in compliance with applicable laws and regulations.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Intellectual Property
            </Typography>
            <Typography paragraph>
              All content and materials available through our services are protected by intellectual property rights and belong to KH LeetSoft or its licensors.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Limitation of Liability
            </Typography>
            <Typography paragraph>
              KH LeetSoft shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </Typography>
          </TabPanel>
        </Paper>

        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Container>
    </Box>
  );
}

export default Legal;