import * as React from 'react';
import { Box, Card, TextField, Grid } from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { BlockTitle } from '../block-title';
import { useTranslation } from 'react-i18next';
import { withClasses } from './card-details.css';

export const CardDetails = () => {
  const [t] = useTranslation();
  const classes = withClasses();

  return (
    <Card>
      <Box className={classes.container}>
        <Box className={classes.titleContainer}>
          <BlockTitle titleKey={t('widget.cardDetailsTitle')}/>
          <CreditCardOutlinedIcon/> <CreditCardOutlinedIcon/> <CreditCardOutlinedIcon/> <CreditCardOutlinedIcon/> <CreditCardOutlinedIcon/>
        </Box>
        <Grid container className={classes.contentContainer}>
          <Grid item xs={12} className={classes.longBlock}>
            <TextField
              value={''}
              required
              fullWidth
              placeholder={t('Card Number')}
              autoFocus
            />
          </Grid>
          <Grid item xs={6} className={classes.shortBlockLeft} pr={1}>
            <TextField
              value={''}
              required
              fullWidth
              placeholder={t('MM / YYYY')}
              autoFocus
            />
          </Grid>
          <Grid item xs={6} className={classes.shortBlockRight} pl={1}>
            <TextField
              value={''}
              required
              fullWidth
              placeholder={t('CVC')}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={''}
              required
              fullWidth
              placeholder={t('Cardholder Name')}
              autoFocus
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
