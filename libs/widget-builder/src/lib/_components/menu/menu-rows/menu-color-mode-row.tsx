import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeName } from '@cashier/theme';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item/menu-item-row';
import { useTranslation } from 'react-i18next';
import { useWidgetSettingsStore, WidgetColorMode } from '@cashier/widget-instance';

export const MenuColorModeRow = observer(() => {
  const [t] = useTranslation();
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleChange = React.useCallback(() => {
    const newValue = widgetSettingsStore.colorMode === WidgetColorMode.Dark
      ? WidgetColorMode.Light
      : WidgetColorMode.Dark;

    widgetSettingsStore.updateBaseSettings('colorMode', newValue);
  }, [widgetSettingsStore.colorMode]);

  return (
    <MenuItemRow
      titleKey={t('Dark Mode')}
      control={
        <FormControlLabel
          control={
            <Switch
              checked={widgetSettingsStore.colorMode === ThemeName.Dark}
              onChange={handleChange}
            />
          }
        />
      }
    />
  );
});