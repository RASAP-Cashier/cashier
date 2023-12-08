import { useContext } from 'react';
import { SidebarContext } from '../../../contexts/SidebarContext';
import { Box, Drawer, styled, useTheme } from '@mui/material';
import { SidebarContent } from './_components';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        position: relative;
        z-index: 7;
        height: 100%;
        padding: 0;
`,
);

export const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block',
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background: theme.sidebar.background,
          boxShadow: theme.sidebar.boxShadow,
          padding: 0,
        }}
      >
        <SidebarContent/>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === 'rtl'
          ? 'right'
          : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background: theme.sidebar.background,
          }}
        >
          <SidebarContent/>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}
