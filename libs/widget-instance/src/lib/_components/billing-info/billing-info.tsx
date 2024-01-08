import * as React from 'react';
import { Box, TextField } from '@mui/material';
import { BlockTitle } from '../block-title';
import { IBillingInfoProps } from './billing-info.interface';

export const BillingInfo = (props: IBillingInfoProps) => {
  const { cornerRadius, fieldColor, lineColor } = props;
  const fieldStyles = {
    backgroundColor: fieldColor,
    cornerRadius,
    borderColor: lineColor,
  };

  return (
    <Box p={3}>
      <BlockTitle title="Billing Info"/>
      <TextField
        style={fieldStyles}
        margin="normal"
        value={''}
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoFocus
      />
      <TextField
        style={fieldStyles}
        margin="normal"
        value={''}
        required
        fullWidth
        id="middle-name"
        label="Middle Name"
        name="middle-name"
        autoFocus
      />
    </Box>
  );
};
