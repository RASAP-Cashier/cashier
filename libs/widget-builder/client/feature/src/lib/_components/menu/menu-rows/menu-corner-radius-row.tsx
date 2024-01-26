import * as React from 'react';
import { ChangeEvent } from 'react';
import { useWidgetSettingsStore } from '@cashier/widget/client/logic';
import { WidgetCornerRadius } from '@cashier/widget/cs';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item/menu-item-row';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { EnumValues } from 'enum-values';

export const MenuCornerRadiusRow = observer(() => {
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleChange = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    widgetSettingsStore.updateStylesSettings('cornerRadius', newValue);
  }, [widgetSettingsStore.styles.cornerRadius]);

  return (
    <MenuItemRow
      titleKey={'Corner Radius'}
      control={
        <TextField
          select
          value={widgetSettingsStore.styles.cornerRadius}
          onChange={handleChange}
        >
          {EnumValues.getValues(WidgetCornerRadius).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      }
    />
  );
});
