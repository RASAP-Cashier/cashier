import * as React from 'react';
import { Grid, TextField } from '@mui/material';
import { IBillingInfoProps } from './billing-info.interface';
import { withClasses } from './billing-info.css';
import { useTranslation } from 'react-i18next';

export const BillingInfo = (props: IBillingInfoProps) => {
  const { cornerRadius, fieldColor, lineColor } = props;
  const fieldStyles = {
    backgroundColor: fieldColor,
    cornerRadius,
    borderColor: lineColor,
  };
  const [t] = useTranslation();
  const classes = withClasses();

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.longBlock} xs={12}>
        <TextField
          style={fieldStyles}
          value={''}
          required
          fullWidth
          placeholder={t('Address')}
          autoFocus
        />
      </Grid>
      <Grid item className={classes.longBlock} xs={12}>
        <TextField
          style={fieldStyles}
          value={''}
          required
          fullWidth
          placeholder={t('Country')}
          autoFocus
        />
      </Grid>
      <Grid item className={classes.longBlock} xs={12}>
        <TextField
          style={fieldStyles}
          value={''}
          required
          fullWidth
          placeholder={t('City')}
          autoFocus
        />
      </Grid>
      <Grid item className={classes.shortBlockLeft} xs={6} pr={1}>
        <TextField
          style={fieldStyles}
          value={''}
          required
          fullWidth
          placeholder={t('State')}
          autoFocus
        />
      </Grid>
      <Grid item className={classes.shortBlockRight} xs={6} pl={1}>
        <TextField
          style={fieldStyles}
          value={''}
          required
          fullWidth
          placeholder={t('Post Code')}
          autoFocus
        />
      </Grid>
      <Grid item className={classes.longBlock} xs={12}>
        <TextField
          style={fieldStyles}
          value={''}
          required
          fullWidth
          placeholder={t('Phone Number')}
          autoFocus
        />
      </Grid>
    </Grid>
  );
};
