import { Grid } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { ILocalization } from '@cashier/i18n';
import { MenuTitle } from '../menu-title';

export const MenuGroupTitleRow = observer((props: {
  titleKey: keyof ILocalization;
}) => {
  const [t] = useTranslation();
  const { titleKey } = props;

  return (
    <Grid item xs={12}>
      <MenuTitle text={t(titleKey)}/>
    </Grid>
  );
});
