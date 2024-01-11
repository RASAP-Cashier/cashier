import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useWidgetSettingsStore, WidgetLayout } from '@cashier/widget-instance';
import { observer } from 'mobx-react';
import { MenuItemRow } from './menu-item-row';

export const MenuLayoutRow = observer(() => {
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleLayoutChange = React.useCallback(() => {
    const newValue = widgetSettingsStore.layout === WidgetLayout.Separate
      ? WidgetLayout.Single
      : WidgetLayout.Separate;

    widgetSettingsStore.updateBaseSettings('layout', newValue);
  }, [widgetSettingsStore.layout]);

  return (
    <MenuItemRow
      titleKey={'Separate Page'}
      control={
        <FormControlLabel
          control={
            <Switch
              checked={widgetSettingsStore.layout === WidgetLayout.Separate}
              onChange={handleLayoutChange}
            />
          }
        />
      }
    />
  );
});
