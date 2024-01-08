import styled from '@emotion/styled';
import { WidgetInstance } from '@cashier/widget-instance';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@cashier/theme';
import { getI18next } from '@cashier/i18n';
import { I18nextProvider } from 'react-i18next';
import React from 'react';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const i18next = getI18next();

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledApp>
          <I18nextProvider i18n={i18next}>
            <WidgetInstance/>
          </I18nextProvider>
        </StyledApp>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
