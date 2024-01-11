import { Grid } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import { observer } from 'mobx-react';
import { MenuSubtitle } from '../menu-subtitle';
import { ILocalization } from '@cashier/i18n';

export const MenuItemRow = observer((props: {
  titleKey: keyof ILocalization;
  control: React.ReactElement;
}) => {
  const [t] = useTranslation();
  const { titleKey, control } = props;

  return (
    <>
      <Grid item xs={6}>
        <MenuSubtitle text={t(titleKey)}/>
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          control={control}
        />
      </Grid>
    </>
  );
});
