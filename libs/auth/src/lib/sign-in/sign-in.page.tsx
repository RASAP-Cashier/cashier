import { useState } from 'react';
import { useAuthForm } from './_hooks/use-auth-form';
import { Avatar, Box, Container, CssBaseline, Divider, IconButton, Tooltip, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoginForm } from './_components/login-form';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export function SignInPage() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm />
        <Divider sx={{ my: 4 }} />
        <Box sx={{ textAlign: 'center' }}>
          <Tooltip arrow placement="top" title="Facebook">
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title="Twitter">
            <IconButton color="primary">
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title="Instagram">
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Container>
  );
}
