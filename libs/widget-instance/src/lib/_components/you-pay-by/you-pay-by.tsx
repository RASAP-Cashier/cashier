import * as React from 'react';
import { IYouPayByProps } from './you-pay-by.interface';
import { Box, Card, Divider, styled, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { BoxTitle } from '../box-title';

const CardCc = styled(Card)(
  (props: any) => `
     border: 1px solid ${props.theme.colors.alpha.black[30]};
     background: ${props.theme.colors.alpha.black[5]};
     box-shadow: none;
`,
);

export const YouPayBy = (props: IYouPayByProps) => {
  const onNewCardChange = () => {
    // TODO
  };
  const newCards = [];

  return (
    <Box p={3}>
      <BoxTitle title="You pay by"/>
      <Box>
        <TextField
          fullWidth
          id="new-card"
          select
          label="New Card"
          value={''}
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
      <Box>
        <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" fontWeight="normal">
              0000 0000 0000 0000
            </Typography>
          </Box>
          <Divider/>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" fontWeight="normal">
              Cardholder Name
            </Typography>
          </Box>
          <Divider/>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" fontWeight="normal">
              MM / YY
            </Typography>
          </Box>
        </CardCc>
      </Box>
    </Box>
  );
};
