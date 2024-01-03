import * as React from 'react';
import { IBillingInfoProps } from './billing-info.interface';
import { Box, Divider, Typography } from '@mui/material';
import { BoxTitle } from '../box-title';

export const BillingInfo = (props: IBillingInfoProps) => {
  return (
    <Box p={3}>
      <BoxTitle title="Billing Info"/>
      <Box>
        <Typography variant="body1" fontWeight="normal">
          Customer name
        </Typography>
      </Box>
      <Divider/>
      <Box p={3}>

      </Box>
    </Box>
  );
};
