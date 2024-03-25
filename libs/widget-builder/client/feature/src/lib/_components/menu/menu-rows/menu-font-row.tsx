import * as React from 'react';
import { ChangeEvent } from 'react';
import { useWidgetSettingsStore } from '@cashier/widget/client/logic';
import { WidgetFont } from '@cashier/widget/cs';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { EnumValues } from 'enum-values';

export const MenuFontRow = observer(() => {
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleChange = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      widgetSettingsStore.updateStylesSettings(
        'font',
        newValue,
        widgetSettingsStore.settings.colorMode,
      );
    },
    [widgetSettingsStore.settings.colorMode],
  );

  return (
    <MenuItemRow
      titleKey={'Font'}
      control={
        <TextField
          select
          value={
            widgetSettingsStore.styles(widgetSettingsStore.settings.colorMode)
              .font
          }
          onChange={handleChange}
        >
          {EnumValues.getValues(WidgetFont).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      }
    />
  );
});
