import React, { useState } from 'react';
import { Grid, Typography, Box, Container, TextField, Alert, Button, CircularProgress } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './contact.css';

import { contactBg2 } from '../../assets';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  phone: '',
  projectDescription: '',
};

const ContactUsSection = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)


  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const internationalPhoneRegex = /^\+2519\d{8}$/;

    if (!values.firstName) {
      errors.firstName = 'First name is required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required!';
    }
    if (!values.companyName) {
      errors.companyName = 'Company name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email format!';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required!';
    } else if (!internationalPhoneRegex.test(values.phone)) {
      errors.phone = 'Invalid phone number format (+251)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (formErrors[name]) formErrors[name] = '';
  };

  const handlePhoneChange = (value) => {
    const sanitizedValue = value.replace(/\s+/g, '');
    setFormValues({ ...formValues, phone: sanitizedValue });
    if (formErrors.phone) formErrors.phone = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate(formValues);

    if (isValid) {
      try {
        setIsSubmitting(true);

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;

        const templateParams = {
          recipient_name: 'Nexa Addis',
          from_email: formValues.email,
          first_name: formValues.firstName,
          last_name: formValues.lastName,
          company_name: formValues.companyName,
          phone_number: formValues.phone,
          message: formValues.projectDescription,
        };

        // Sending the email
        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

        // Display success message
        Swal.fire({
          title: 'Good job!',
          text: 'Thank you for reaching out! We will contact you soon.',
          icon: 'success',
          confirmButtonColor: '#fb8122',
          background: '#f7f7f7',
        });
        setFormValues(initialValues);
        console.log('Email successfully sent:', response);
      } catch (error) {
        console.error('Error occurred while submitting the form:', error);

        // Display error message
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong, please try again later.',
          icon: 'error',
          confirmButtonColor: '#fb8122',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  return (
    <Box id="contact" sx={{ backgroundColor: '#fff', p: "8rem 0", position: 'relative' }}>
      <Container>
        {/* BG Img */}
        <Box
          position="absolute"
          top="15%"
          right="40%"
          component="img"
          src={contactBg2}
          alt="Contact Us"
          sx={{
            width: '45%',
            height: 'auto',
            display: { xs: 'none', md: 'block' },
            filter: 'grayscale(100%)',
          }}
        />
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Box sx={{ mb: '2rem', textAlign: { xs: "center", md: "center", lg: 'left' } }}>
              <Typography
                variant="body1"
                fontWeight="bold"
                // letterSpacing="1.5"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                  mb: '0.5rem',
                  color: 'var(--primary-color)',
                  textTransform: 'uppercase',
                }}
              >
                REACH OUT TO US
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: '700', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' }, color: '#1c2229' }}
              >
                Let's get <span style={{ color: '#fb8122' }}>in touch!</span>
              </Typography>
            </Box>
            <Grid container spacing={3} component="form" onSubmit={handleSubmit}>
              <Grid item xs={12}>
                <TextField
                  label="First Name*"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formValues.firstName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.firstName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.firstName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Last Name*"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formValues.lastName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.lastName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.lastName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Business Email*"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formValues.email}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.email && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.email}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Company Name*"
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formValues.companyName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.companyName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.companyName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <MuiTelInput
                  label="Phone Number*"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formValues.phone}
                  onChange={handlePhoneChange}
                  defaultCountry="ET"
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '& .MuiTextField-root': {
                        '& fieldset': {
                          borderColor: formErrors.phone ? '#f44336 !important' : 'default',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: formErrors.phone ? '#f44336' : '#fb8122',
                        },
                      },
                    },
                  }}
                  fullWidth
                />
                {formErrors.phone && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.phone}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="projectDescription"
                  label="Describe your project..."
                  multiline
                  minRows={4}
                  sx={{ width: '100%' }}
                  name="projectDescription"
                  placeholder="my project is about..."
                  value={formValues.projectDescription}
                  onChange={(e) => setFormValues({ ...formValues, projectDescription: e.target.value })}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: ".9rem", sm: "1rem" },
                    mt: 2,
                    py: 1,
                    px: 4,
                    backgroundColor: '#fb8122',
                    '&:hover': { backgroundColor: '#f77b2e' },
                    borderRadius: '12px',
                    textTransform: 'none',
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    'Submit'
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsSection;
