import * as React from 'react';
import { useCallback } from 'react';
import { Grid } from '@mui/material';
import { PaymentMethods } from './_components/payment-methods';
import { useWidgetSettingsStore, WidgetLayout } from './_stores';
import { observer } from 'mobx-react';
import { CardDetails } from './_components/card-details';
import { BillingInfo } from './_components/billing-info';
import { IWidgetInstanceProps } from './widget-instance.interface';
import { useI18nStore } from '@cashier/i18n';
import { Summary } from './_components/summary';

export const WidgetInstance = observer((props: IWidgetInstanceProps) => {
  const { lang, currency, colorMode } = props;
  const widgetSettingsStore = useWidgetSettingsStore();
  const i18nStore = useI18nStore();

  useCallback(() => {
    lang && (i18nStore.lang = lang);
  }, [lang, i18nStore]);

  useCallback(() => {
    colorMode && (widgetSettingsStore.colorMode = colorMode);
  }, [colorMode, widgetSettingsStore]);

  useCallback(() => {
    currency && (widgetSettingsStore.currency = currency);
  }, [currency, widgetSettingsStore]);

  const {
    font, fontSize, backgroundColor, buttonTextColor, buttonBackgroundColor, cornerRadius, fieldColor, lineColor,
    textColor,
  } = widgetSettingsStore.styles;

  console.log(textColor);

  switch (widgetSettingsStore.layout) {
    case WidgetLayout.Separate: {
      return null;
    }

    case WidgetLayout.Single:
    default: {
      return (
        <Grid container style={{
          fontFamily: font,
          fontSize,
          backgroundColor,
          color: textColor,
          width: '100%',
          height: 600
        }}>
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
    }
  }
});
