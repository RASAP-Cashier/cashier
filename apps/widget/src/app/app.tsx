import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@cashier/theme';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { getI18next } from '@cashier/i18n';
import { I18nextProvider } from 'react-i18next';
import { WidgetInstance } from '@cashier/widget/client/feature';
import { useMerchantInfo } from './_hooks/use-merchant-info';

export function App() {
  const i18next = getI18next();
  const merchantInfo = useMerchantInfo();

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline/>
        <I18nextProvider i18n={i18next}>
          <WidgetInstance
            merchantInfo={merchantInfo}
          />
        </I18nextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
