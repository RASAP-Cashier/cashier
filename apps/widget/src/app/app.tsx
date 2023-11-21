import styled from '@emotion/styled';
import { WidgetInstance } from '@cashier/widget-instance';
import { getWidgetSettings } from '@cashier/widget-builder';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <WidgetInstance settings={getWidgetSettings(1)} />
    </StyledApp>
  );
}
