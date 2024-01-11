import * as React from 'react';
import { useWidgetSettingsStore, WidgetFont, WidgetFontSize, WidgetLayout } from '@cashier/widget-instance';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item/menu-item-row';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChangeEvent } from 'react';
import { EnumValues } from 'enum-values';

export const MenuFontSizeRow = observer(() => {
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleChange = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    widgetSettingsStore.updateStylesSettings('fontSize', newValue);
  }, [widgetSettingsStore.styles.fontSize]);

  return (
    <MenuItemRow
      titleKey={'Font Size'}
      control={
        <TextField
          select
          value={widgetSettingsStore.styles.fontSize}
          onChange={handleChange}
        >
          {EnumValues.getValues(WidgetFontSize).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      }
    />
  );
});
