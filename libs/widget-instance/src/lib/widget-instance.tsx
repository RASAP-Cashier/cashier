import * as React from 'react';
import { useCallback } from 'react';
import { useWidgetSettingsStore, WidgetLayout } from './_stores';
import { IWidgetInstanceProps } from './widget-instance.interface';
import { useI18nStore } from '@cashier/i18n';
import { SeparateLayout } from './_components/separate-layout';
import { SingleLayout } from './_components/single-layout';
import { BillingInfo } from './_components/billing-info';
import { Summary } from './_components/summary';
import { CardDetails } from './_components/card-details';
import { withClasses } from './widget-instance.css';
import { PaymentMethodsList } from './_components/payment-methods';
import { PaymentMethodsSlider } from './_components/payment-methods/payment-methods-slider';
import { Box } from '@mui/material';
import { observer } from 'mobx-react';

export const WidgetInstance = observer((props: IWidgetInstanceProps) => {
  const { lang, currency, colorMode } = props;
  const widgetSettingsStore = useWidgetSettingsStore();
  const i18nStore = useI18nStore();
  const classes = withClasses();

  useCallback(() => {
    lang && (i18nStore.lang = lang);
  }, [lang, i18nStore]);

  useCallback(() => {
    colorMode && (widgetSettingsStore.colorMode = colorMode);
  }, [colorMode, widgetSettingsStore.colorMode]);

  useCallback(() => {
    currency && (widgetSettingsStore.currency = currency);
  }, [currency, widgetSettingsStore.currency]);

  const {
    font, fontSize, backgroundColor,
    textColor, cornerRadius, fieldColor, lineColor, buttonBackgroundColor, buttonTextColor,
  } = widgetSettingsStore.styles;

  return (
    <Box className={classes.container}>
      {
        widgetSettingsStore.layout === WidgetLayout.Separate
          ? <SeparateLayout
            step1Component={
              <>
                <PaymentMethodsList/>
              </>
            }
            step2LeftColumnComponent={
              <>
                <CardDetails/>
                <BillingInfo cornerRadius={cornerRadius} fieldColor={fieldColor} lineColor={lineColor}/>
              </>
            }
            step2RightColumnComponent={
              <>
                <Summary currency={widgetSettingsStore.currency} buttonText={widgetSettingsStore.buttonText}
                         buttonBackgroundColor={buttonBackgroundColor} buttonTextColor={buttonTextColor}/>
              </>
            }
          />
          : <SingleLayout
            leftColumnComponent={
              <>
                <PaymentMethodsSlider/>
                <CardDetails/>
                <BillingInfo cornerRadius={cornerRadius} fieldColor={fieldColor} lineColor={lineColor}/>
              </>
            }
            rightColumnComponent={
              <>
                <Summary currency={widgetSettingsStore.currency}
                         buttonText={widgetSettingsStore.buttonText}
                         buttonTextColor={buttonTextColor}
                         buttonBackgroundColor={buttonBackgroundColor}
                         companyLogo={widgetSettingsStore.companyLogo}
                />
              </>
            }
          />
      }
    </Box>
  );
});
