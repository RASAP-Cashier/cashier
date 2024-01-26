import { Box } from '@mui/material';
import * as React from 'react';
import { observer } from 'mobx-react';
import { MenuLayoutRow } from './menu-rows/menu-layout-row';
import { MenuGroupTitleRow } from './menu-rows/group-title/menu-group-title-row';
import { MenuFontRow } from './menu-rows/menu-font-row';
import { MenuFontSizeRow } from './menu-rows/menu-font-size-row';
import { MenuCornerRadiusRow } from './menu-rows/menu-corner-radius-row';
import { withClasses } from './widget-builder-menu.css';
import { MenuColorModeRow } from './menu-rows/menu-color-mode-row';

export const WidgetBuilderMenu = observer(() => {
  const classes = withClasses();

  return (
    <Box className={classes.container}>
      <MenuGroupTitleRow titleKey={'Payment Method Page'}/>
      <MenuLayoutRow/>
      <MenuGroupTitleRow titleKey={'Style and Branding'}/>
      <MenuColorModeRow/>
      <MenuFontRow/>
      <MenuFontSizeRow/>
      <MenuCornerRadiusRow/>
    </Box>
  );
});
