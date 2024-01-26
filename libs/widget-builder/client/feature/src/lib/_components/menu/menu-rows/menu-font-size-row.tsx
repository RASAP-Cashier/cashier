import * as React from 'react';
import { ChangeEvent } from 'react';
import {
  useWidgetSettingsStore,
  useWidgetStateStore,
} from '@cashier/widget/client/logic';
import { WidgetFontSize } from '@cashier/widget/cs';
import { observer } from 'mobx-react';
import { MenuItemRow } from './item';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { EnumValues } from 'enum-values';

export const MenuFontSizeRow = observer(() => {
  const widgetStateStore = useWidgetStateStore();
  const widgetSettingsStore = useWidgetSettingsStore();

  const handleChange = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      widgetSettingsStore.updateStylesSettings(
        'fontSize',
        newValue,
        widgetStateStore.merchantInfo.colorMode
      );
    },
    [widgetStateStore.merchantInfo.colorMode]
  );

  return (
    <MenuItemRow
      titleKey={'Font Size'}
      control={
        <TextField
          select
          value={
            widgetSettingsStore.styles(widgetStateStore.merchantInfo.colorMode)
              .fontSize
          }
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
