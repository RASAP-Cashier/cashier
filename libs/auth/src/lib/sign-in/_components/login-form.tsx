import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useAuthForm } from '@cashier/auth';
import { useMemo } from 'react';

export const LoginForm = () => {
  const { formState, handleInputChange, handleSubmit } = useAuthForm();
  const isFormValid = useMemo(() => {
    const isEmailValid = !!formState.email;
    const isPasswordValid = !!formState.password;

    return isEmailValid && isPasswordValid;
  }, [formState.email, formState.password]);

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        value={formState.email}
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
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={handleInputChange}
      />
      <FormControlLabel sx={{ width: '100%' }} control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"/>
      <Button type="submit" size="large" fullWidth sx={{ mt: 3, mb: 2 }} disabled={!isFormValid}>
        Sign In
      </Button>
    </Box>
  );
};
