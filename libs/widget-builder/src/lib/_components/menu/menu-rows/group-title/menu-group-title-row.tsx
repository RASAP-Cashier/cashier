import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { ILocalization } from '@cashier/i18n';
import { withClasses } from './menu-group-title-row.css';
import { Box } from '@mui/material';

export const MenuGroupTitleRow = observer((props: {
  titleKey: keyof ILocalization;
}) => {
  const [t] = useTranslation();
  const { titleKey } = props;
  const classes = withClasses();

  return (
    <Box className={classes.container}>
      {t(titleKey)}
    </Box>
  );
});
