import { useNavigate, useRoutes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { useRootStore } from '@cashier/auth';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@cashier/theme';
import { appRoutes } from './app.router';
import React, { useEffect } from 'react';
import { initI18n } from '@cashier/i18n';
import { I18nextProvider } from 'react-i18next';

export const App = () => {
  const { userStore, authStore } = useRootStore();
  const navigate = useNavigate();
  const i18next = initI18n();

  useEffect(() => {
    if (!authStore.isAuth) {
      navigate('/sign-in');
    }
    else if (authStore.isAuth && !userStore?.user?.id) {
      userStore.getUser().then(response => {
        if (!response) {
          navigate('/sign-in');
        }
      });
    }
  }, [authStore.isAuth, navigate, userStore?.user?.id]);

  const content = useRoutes(appRoutes);

  return (
    <Box id="app" height="100%">
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline/>
          <I18nextProvider i18n={i18next}>
            <>
              {content}
            </>
          </I18nextProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </Box>
  );
};
