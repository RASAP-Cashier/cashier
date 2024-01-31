import React, { useContext } from 'react';
import { Button, ListItem } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from '../../../../contexts';
import '@cashier/theme';
import { useTranslation } from 'react-i18next';
import { ILocalization } from '@cashier/i18n';

type IRoute = string;

export const SidebarMenuItem = (props: {
  route: IRoute;
  icon: React.ReactNode;
  textKey: keyof ILocalization;
}) => {
  const { closeSidebar } = useContext(SidebarContext);
  const [t] = useTranslation();
  const { route, icon, textKey } = props;

  return <ListItem component="div">
    <Button
      disableRipple
      component={RouterLink as any}
      onClick={closeSidebar}
      to={route}
      startIcon={icon}
    >
      {t(textKey as never as any) as React.ReactNode}
    </Button>
  </ListItem>;
};

