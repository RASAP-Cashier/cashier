import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@cashier/theme';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { getI18next, Language } from '@cashier/i18n';
import { I18nextProvider } from 'react-i18next';
import { WidgetInstance } from '@cashier/widget/client/feature';
import { WidgetColorMode } from '@cashier/widget/cs';

export function App() {
  const i18next = getI18next();

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline/>
        <I18nextProvider i18n={i18next}>
          <WidgetInstance lang={Language.en} colorMode={WidgetColorMode.Light} merchantInfo={{
            currency: 'USD',
            amount: 1500,
            tax: 10,
            vat: 15,
          }}/>
        </I18nextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
