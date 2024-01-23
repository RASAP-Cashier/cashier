import React from 'react';
import { Divider, styled } from '@mui/material';
import '@cashier/theme';

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
        background: ${theme.palette.background.default};
        margin: 10px;
`,
);

export const SideMenuDivider = () => <DividerWrapper />
