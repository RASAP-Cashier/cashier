import { Box, Grid, styled } from '@mui/material';
import * as React from 'react';
import { observer } from 'mobx-react';
import { MenuLayoutRow } from './menu-rows/menu-layout-row';
import { MenuGroupTitleRow } from './menu-rows/menu-group-title-row';
import { MenuFontRow } from './menu-rows/menu-font-row';
import { MenuFontSizeRow } from './menu-rows/menu-font-size-row';
import { MenuCornerRadiusRow } from './menu-rows/menu-corner-radius-row';

const MenuContainer = styled(Box)(
  ({ theme }) => `
        display: flex;
        height: 100%;
        flex: 1;
        background-color: ${theme.palette.background.paper};
`,
);

export const Menu = observer(() => {
  return (
    <MenuContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <MenuGroupTitleRow titleKey={'Payment Method Page'}/>
          <MenuLayoutRow/>
          <MenuGroupTitleRow titleKey={'Style and Branding'}/>
          <MenuFontRow/>
          <MenuFontSizeRow/>
          <MenuCornerRadiusRow/>
        </Grid>
      </Box>
    </MenuContainer>
  );
});
