import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item';
import { useTranslation } from 'react-i18next';
import { useWidgetStateStore } from '@cashier/widget/client/logic';
import { WidgetColorMode } from '@cashier/widget/cs';

export const MenuColorModeRow = observer(() => {
  const [t] = useTranslation();
  const widgetStateStore = useWidgetStateStore();

  const handleChange = React.useCallback(() => {
    const newValue =
      widgetStateStore.merchantInfo.colorMode === WidgetColorMode.Dark
        ? WidgetColorMode.Light
        : WidgetColorMode.Dark;

    widgetStateStore.updateMerchantInfo({
      ...widgetStateStore.merchantInfo,
      colorMode: newValue,
    });
  }, [widgetStateStore.merchantInfo.colorMode]);

  return (
    <MenuItemRow
      titleKey={t('Dark Mode')}
      control={
        <FormControlLabel
          label={''}
          control={
            <Switch
              checked={
                widgetStateStore.merchantInfo.colorMode === WidgetColorMode.Dark
              }
              onChange={handleChange}
            />
          }
        />
      }
    />
  );
});
