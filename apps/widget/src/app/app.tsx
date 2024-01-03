import styled from '@emotion/styled';
import { WidgetInstance } from '@cashier/widget-instance';
import { getWidgetSettings } from '@cashier/widget-builder';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from '@cashier/theme';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledApp>
          <WidgetInstance settings={getWidgetSettings(1)}/>
        </StyledApp>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
