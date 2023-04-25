// Здесь будет определяться логикa формы регистрации почты и пароля пользователя в мессенджере.
// Интерфейс для регистрации почты и пароля для нового пользователя

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignUpForm () {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleContinue = () => {
    window.location.href = '/registration';
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Create password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeat_password"
              label="Repeat password"
              type="password"
              id="repeat_password"
              autoComplete="current-password"
            />
       <Button onClick={() => { window.location.href = '/registration' }} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
       >Continue registration</Button>

            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Do you already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt={8}>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
