import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useWidgetSettingsStore } from '@cashier/widget/client/logic';
import { WidgetLayout } from '@cashier/widget/cs';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item';
import { useTranslation } from 'react-i18next';

export const MenuLayoutRow = observer(() => {
  const [t] = useTranslation();
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleChange = React.useCallback(() => {
    const newValue =
      widgetSettingsStore.settings.layout === WidgetLayout.Separate
        ? WidgetLayout.Single
        : WidgetLayout.Separate;

    widgetSettingsStore.updateBaseSettings('layout', newValue);
  }, [widgetSettingsStore.settings.layout]);

  return (
    <MenuItemRow
      titleKey={t('Separate Page')}
      control={
        <FormControlLabel
          label={''}
          control={
            <Switch
              checked={
                widgetSettingsStore.settings.layout === WidgetLayout.Separate
              }
              onChange={handleChange}
            />
          }
        />
      }
    />
  );
});
