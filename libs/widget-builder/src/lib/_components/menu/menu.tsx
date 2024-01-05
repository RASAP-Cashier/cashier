import { Box, Grid, styled } from '@mui/material';
import * as React from 'react';
import { BrandColorsRow } from './_components/brand-colors-row';

const MenuContainer = styled(Box)(
  ({ theme }) => `
        display: flex;
        height: 100%;
        flex: 1;
        background-color: ${theme.palette.background.paper};
`,
);

export const Menu = () => {
  return (
    <MenuContainer>
      <Grid container direction="row" p={3}>
        <BrandColorsRow/>
      </Grid>
    </MenuContainer>
  );
};
