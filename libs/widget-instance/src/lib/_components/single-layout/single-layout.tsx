import * as React from 'react';
import { Grid } from '@mui/material';
import { ISingleLayoutProps } from './single-layout.interface';
import { PaymentMethods } from '../payment-methods';
import { CardDetails } from '../card-details';
import { BillingInfo } from '../billing-info';
import { Summary } from '../summary';
import { useWidgetSettingsStore } from '@cashier/widget-instance';

export const SingleLayout = (props: ISingleLayoutProps) => {
  const widgetSettingsStore = useWidgetSettingsStore();

  const {
    buttonTextColor, buttonBackgroundColor, cornerRadius, fieldColor, lineColor,
  } = widgetSettingsStore.styles;

  return (
    <Grid container>
      <Grid container item xs={6} direction="column">
        <PaymentMethods/>
        <CardDetails/>
        <BillingInfo cornerRadius={cornerRadius} fieldColor={fieldColor} lineColor={lineColor}/>
      </Grid>
      <Grid container item xs={6} direction="column">
        <Summary currency={widgetSettingsStore.currency}
                 buttonText={widgetSettingsStore.buttonText}
                 buttonTextColor={buttonTextColor}
                 buttonBackgroundColor={buttonBackgroundColor}
                 companyLogo={widgetSettingsStore.companyLogo}
        />
      </Grid>
    </Grid>
  );
};
