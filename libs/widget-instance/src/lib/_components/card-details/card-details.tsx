import * as React from 'react';
import { Box, Card, styled, Typography } from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { BlockTitle } from '../block-title';
import { useTranslation } from 'react-i18next';

const CardCc = styled(Card)(
  (props: any) => `
     border: 1px solid ${props.theme.colors.alpha.black[30]};
     background: ${props.theme.colors.alpha.black[5]};
     box-shadow: none;
`,
);

export const CardDetails = () => {
  const [t] = useTranslation();

  return (
    <Box p={3}>
      <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
        <Box display="flex" alignItems="center">
          <BlockTitle titleKey={t('widget.cardDetailsTitle')}/>
          <CreditCardOutlinedIcon/>
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
    </Box>
  );
};
