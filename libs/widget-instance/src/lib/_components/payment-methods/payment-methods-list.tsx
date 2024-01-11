import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { BlockTitle } from '../block-title';
import { useTranslation } from 'react-i18next';

export const PaymentMethodsList = () => {
  const [t] = useTranslation();

  return (
    <Box p={3}>
      <BlockTitle titleKey={t('widget.paymentMethodsTitle')}/>
      <Grid container spacing={1}>
        List
      </Grid>
    </Box>
  );
};
