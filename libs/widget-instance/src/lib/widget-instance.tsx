import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { PaymentDetails } from './_components/payment-details';
import { YouPayBy } from './_components/you-pay-by';
import { BillingInfo } from './_components/billing-info';
import { Amount } from './_components/amount';
import { Copyright } from '@mui/icons-material';
import { useWidgetSettingsStore } from './_stores';
import { observer } from 'mobx-react';

export const WidgetInstance = observer(() => {
  const { widgetSettings } = useWidgetSettingsStore();

  console.log(widgetSettings);

  return (
    <Grid container style={{
      color: widgetSettings.brandColors,
    }}>
      <Grid item xs={12}>
        <Box p={3}>
          <Typography variant="h5" component="h5">
            Payment Details
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <PaymentDetails/>
      </Grid>
      <Grid item xs={6}>
        <YouPayBy/>
      </Grid>
      <Grid item xs={6}>
        <Amount/>
      </Grid>
      <Grid item xs={6}>
        <BillingInfo/>
      </Grid>
      <Grid item xs={12}>

      </Grid>
      <Grid item xs={12}>
        <Copyright/>
      </Grid>
    </Grid>
  );
});
