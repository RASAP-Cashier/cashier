import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import { Link } from 'react-router-dom';

export function SignUpPage() {
  const handleSubmit = () => {
    // TODO
  }
  const handleInputChange = () => {
    // TODO
  }
  const isFormValid = true;

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
          <SelfImprovementOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            value={''}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            value={''}
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoComplete="firstname"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            value={''}
            required
            fullWidth
            id="lastname"
            label="Last Name"
            autoComplete="lastname"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password-confirm"
            label="Password Confirm"
            type="password"
            id="password-confirm"
            autoComplete="password-confirm"
            onChange={handleInputChange}
          />

          <Button type="submit" size="large" fullWidth sx={{ mt: 3, mb: 2 }} disabled={!isFormValid}>
            Sign Up
          </Button>
        </Box>
        <Link to={'/sign-in'}>
          Sign in
        </Link>
      </Box>
    </Container>
  );
}
