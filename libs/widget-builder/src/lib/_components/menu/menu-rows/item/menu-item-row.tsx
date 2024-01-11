import { Box } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import { observer } from 'mobx-react';
import { ILocalization } from '@cashier/i18n';
import { withClasses } from './menu-item-row.css';

export const MenuItemRow = observer((props: {
  titleKey: keyof ILocalization;
  control: React.ReactElement;
}) => {
  const [t] = useTranslation();
  const { titleKey, control } = props;
  const classes = withClasses();

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        {t(titleKey)}
      </Box>
      <Box className={classes.control}>
        <FormControlLabel
          control={control}
        />
      </Box>
    </Box>
  );
});
