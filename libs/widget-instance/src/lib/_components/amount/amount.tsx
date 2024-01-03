import * as React from 'react';
import { IAmountProps } from './amount.interface';
import { Box, CardHeader, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { BoxTitle } from '../box-title';

export const Amount = (props: IAmountProps) => {
  const onNewCardChange = () => {
    // TODO
  };
  const newCards = [];

  return (
    <Box p={3}>
      <BoxTitle title="Amount"/>
      <Box>
        <TextField
          fullWidth
          id="amount"
          select
          label="USD"
          value={'$ 2,499.0'}
          onChange={onNewCardChange}
          helperText=""
        >
          {newCards.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};
