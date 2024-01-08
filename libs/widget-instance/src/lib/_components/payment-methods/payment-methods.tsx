import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { BlockTitle } from '../block-title';
import { useTranslation } from 'react-i18next';

export const PaymentMethods = () => {
  const [t] = useTranslation();

  return (
    <Box p={3}>
      <BlockTitle title={t('widget.paymentMethodsTitle')}/>
      <Grid container spacing={1}>
        Slider
      </Grid>
    </Box>
  );
};
