import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useWidgetSettingsStore, WidgetLayout } from '@cashier/widget-instance';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item/menu-item-row';
import { useTranslation } from 'react-i18next';

export const MenuLayoutRow = observer(() => {
  const [t] = useTranslation();
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleChange = React.useCallback(() => {
    const newValue = widgetSettingsStore.layout === WidgetLayout.Separate
      ? WidgetLayout.Single
      : WidgetLayout.Separate;

    widgetSettingsStore.updateBaseSettings('layout', newValue);
  }, [widgetSettingsStore.layout]);

  return (
    <MenuItemRow
      titleKey={t('Separate Page')}
      control={
        <FormControlLabel
          label={''}
          control={
            <Switch
              checked={widgetSettingsStore.layout === WidgetLayout.Separate}
              onChange={handleChange}
            />
          }
        />
      }
    />
  );
});
