import * as React from 'react';
import { useCallback } from 'react';
import { useWidgetSettingsStore, WidgetLayout } from './_stores';
import { observer } from 'mobx-react';
import { IWidgetInstanceProps } from './widget-instance.interface';
import { useI18nStore } from '@cashier/i18n';
import { Box } from '@mui/material';
import { SeparateLayout } from './_components/separate-layout';
import { SingleLayout } from './_components/single-layout';
import { BillingInfo } from './_components/billing-info';
import { Summary } from './_components/summary';
import { CardDetails } from './_components/card-details';

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
    font, fontSize, backgroundColor,
    textColor, cornerRadius, fieldColor, lineColor, buttonBackgroundColor, buttonTextColor,
  } = widgetSettingsStore.styles;

  return (
    <Box style={{
      fontFamily: font,
      fontSize,
      backgroundColor,
      color: textColor,
      width: '100%',
      height: 600,
    }}>
      {
        widgetSettingsStore.layout === WidgetLayout.Separate
          ? <SeparateLayout
            step1Component={
              <>
                <CardDetails/>
                <BillingInfo cornerRadius={cornerRadius} fieldColor={fieldColor} lineColor={lineColor}/>
              </>
            }
            step2Component={
              <>
                <Summary currency={widgetSettingsStore.currency} buttonText={widgetSettingsStore.buttonText}
                         buttonBackgroundColor={buttonBackgroundColor} buttonTextColor={buttonTextColor}/>
              </>
            }
          />
          : <SingleLayout/>
      }
    </Box>
  );
});
