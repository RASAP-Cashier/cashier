import * as React from 'react';
import { useMemo } from 'react';
import {
  useWidgetSettingsStore,
  useWidgetStateStore,
} from '@cashier/widget/client/logic';
import { IWidgetInstanceProps } from './widget-instance.interface';
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
import { WidgetLayout } from '@cashier/widget/cs';
import { useI18nStore } from '@cashier/i18n';

export const WidgetInstance = observer((props: IWidgetInstanceProps) => {
  const widgetSettingsStore = useWidgetSettingsStore();
  const widgetStateStore = useWidgetStateStore();
  const i18nStore = useI18nStore();

  const classes = withClasses();

  useMemo(() => {
    widgetSettingsStore.loadFromServer(props.merchantInfo.userId);
    widgetStateStore.updateMerchantInfo(props.merchantInfo);
    // TODO find way to update lang inside widgetStateStore
    i18nStore.updateLanguage(props.merchantInfo.lang);
  }, []);

  const {
    cornerRadius,
    fieldColor,
    lineColor,
    buttonBackgroundColor,
    buttonTextColor,
  } = widgetSettingsStore.styles(widgetSettingsStore.settings.colorMode);

  if (widgetSettingsStore.isLoading) {
    return <Box className={classes.container}>{'...LOADING'}</Box>;
  }

  return (
    <Box className={classes.container}>
      {widgetSettingsStore.settings.layout === WidgetLayout.Separate ? (
        <SeparateLayout
          step1Component={
            <>
              <PaymentMethodsList />
            </>
          }
          step2LeftColumnComponent={
            <>
              <CardDetails />
              <BillingInfo
                cornerRadius={cornerRadius}
                fieldColor={fieldColor}
                lineColor={lineColor}
              />
            </>
          }
          step2RightColumnComponent={
            <>
              <Summary
                buttonText={widgetSettingsStore.settings.buttonText}
                buttonBackgroundColor={buttonBackgroundColor}
                buttonTextColor={buttonTextColor}
              />
            </>
          }
        />
      ) : (
        <SingleLayout
          leftColumnComponent={
            <>
              <PaymentMethodsSlider />
              <CardDetails />
              <BillingInfo
                cornerRadius={cornerRadius}
                fieldColor={fieldColor}
                lineColor={lineColor}
              />
            </>
          }
          rightColumnComponent={
            <>
              <Summary
                buttonText={widgetSettingsStore.settings.buttonText}
                buttonTextColor={buttonTextColor}
                buttonBackgroundColor={buttonBackgroundColor}
                companyLogo={widgetSettingsStore.settings.companyLogo}
              />
            </>
          }
        />
      )}
    </Box>
  );
});
