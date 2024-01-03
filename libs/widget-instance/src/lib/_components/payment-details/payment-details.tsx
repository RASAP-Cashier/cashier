import * as React from 'react';
import { IPaymentDetailsProps } from './payment-details.interface';
import { Box, Card, Grid, styled, Typography } from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const CardCc = styled(Card)(
  ({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
`,
);

export const PaymentDetails = (props: IPaymentDetailsProps) => {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs>
          <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
            <Box display="flex" alignItems="center">
              <CreditCardOutlinedIcon/>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Card
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1" fontWeight="normal">
                Visa, Mastercard, AMEX, UnionPay, Discover
              </Typography>
            </Box>
          </CardCc>
        </Grid>
        <Grid item xs>
          <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
            <Box display="flex" alignItems="center">
              <AccountBalanceOutlinedIcon/>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Bank Transfer
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
            </Box>
          </CardCc>
        </Grid>
        <Grid item xs>
          <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
            <Box display="flex" alignItems="center">
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight="normal">
                Skrill
              </Typography>
            </Box>
          </CardCc>
        </Grid>
        <Grid item xs>
          <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
            <Box display="flex" alignItems="center">
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight="normal">
                PayPal
              </Typography>
            </Box>
          </CardCc>
        </Grid>
        <Grid item xs>
          <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
            <Box display="flex" alignItems="center">
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight="normal">
                Klarna.
              </Typography>
            </Box>
          </CardCc>
        </Grid>
        <Grid item xs>
          <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
            <Box display="flex" alignItems="center">
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight="normal">
                WebMoney
              </Typography>
            </Box>
          </CardCc>
        </Grid>
        <Grid item xs>
          <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
            <Box display="flex" alignItems="center">
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight="normal">
                Trustly
              </Typography>
            </Box>
          </CardCc>
        </Grid>
      </Grid>
    </Box>
  );
};
