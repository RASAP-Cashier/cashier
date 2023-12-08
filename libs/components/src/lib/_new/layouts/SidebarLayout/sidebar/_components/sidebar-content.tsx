import { Scrollbar } from '../../../../components';
import { Box, useTheme } from '@mui/material';
import SidebarMenu from './sidebar-menu';

export const SidebarContent = () => {
  const theme = useTheme();

  return (
    <Scrollbar>
      <Box mt={3}>
        <Box
          sx={{
            color: theme.colors.secondary.main,
            fontWeight: 'bold',
            fontSize: 18,
            padding: '10px 20px 0px 20px',
          }}
        >
          ASAP Cashier
        </Box>
      </Box>
      <SidebarMenu/>
    </Scrollbar>
  );
};

