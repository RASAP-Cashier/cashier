import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item';
import { useTranslation } from 'react-i18next';
import { useWidgetSettingsStore } from '@cashier/widget/client/logic';
import { WidgetColorMode } from '@cashier/widget/cs';

export const MenuColorModeRow = observer(() => {
  const [t] = useTranslation();
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleChange = React.useCallback(() => {
    const newValue =
      widgetSettingsStore.settings.colorMode === WidgetColorMode.Dark
        ? WidgetColorMode.Light
        : WidgetColorMode.Dark;

    widgetSettingsStore.updateBaseSettings('colorMode', newValue);
  }, [widgetSettingsStore.settings.colorMode]);

  return (
    <MenuItemRow
      titleKey={t('Dark Mode')}
      control={
        <FormControlLabel
          label={''}
          control={
            <Switch
              checked={
                widgetSettingsStore.settings.colorMode === WidgetColorMode.Dark
              }
              onChange={handleChange}
            />
          }
        />
      }
    />
  );
});
