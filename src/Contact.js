import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import emailjs from '@emailjs/browser';

export default function Contact({ colorPicked }) {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    });
    emailjs.sendForm('service_wfs3ygy', 'template_95sniwc', form.current, '0RvDxI5uhWp9Uh2a4')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor:  colorPicked }}>
            <EmailIcon />
          </Avatar>
          <Typography align="center" variant="h5">
            Leave me a message with this contact form and I'll get back to you ASAP.
          </Typography>
          <Typography align="center" variant="h7">
            Or send an email to lauragonzalez0319@gmail.com the old fashioned way. 
          </Typography>
          <Box component="form" ref={form} noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    autoComplete="message"
                    autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Send
              <SendIcon />
            </Button>
          </Box>
        </Box>
      </Container>
  );
}