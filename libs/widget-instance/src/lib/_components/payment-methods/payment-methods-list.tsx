import * as React from 'react';
import { Box, Button, Grid, SvgIcon } from '@mui/material';
import { BlockTitle } from '../block-title';
import { useTranslation } from 'react-i18next';
import { withClasses } from './payment-methods-list.css';
import { observer } from 'mobx-react';

export const PaymentMethodsList = observer(() => {
  const [t] = useTranslation();
  const classes = withClasses();

  const handleChange = React.useCallback(() => {
    // TODO implement save this method and use like mayment method
  }, []);

  return (
    <Box className={classes.container}>
      <BlockTitle titleKey={t('widget.paymentMethodsTitle')}/>
      <Grid container className={classes.listContainer} pt={2}>
        <Grid item xs={12} className={classes.listItem}>
          <Button variant="outlined" fullWidth onClick={handleChange}>
            {t('Stripe')}
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.listItem} onClick={handleChange}>
          <Button variant="outlined" fullWidth>
            {t('Checkout')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
});
