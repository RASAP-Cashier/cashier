import { useNavigate, useRoutes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { useRootStore } from '@cashier/auth';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@cashier/theme';
import { appRoutes } from './app.router';
import { useEffect } from 'react';

export const App = () => {
  const { userStore, authStore } = useRootStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStore.isAuth) {
      navigate('/sign-in');
    }
    else if (authStore.isAuth && !userStore?.currentUser?.id) {
      userStore.getUser().then(response => {
        if (!response) {
          navigate('/sign-in');
        }
      });
    }
  }, [authStore.isAuth, navigate, userStore?.currentUser?.id]);

  const content = useRoutes(appRoutes);

  return (
    <Box id="app" height="100%">
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline/>
          {content}
        </LocalizationProvider>
      </ThemeProvider>
    </Box>
  );
};
