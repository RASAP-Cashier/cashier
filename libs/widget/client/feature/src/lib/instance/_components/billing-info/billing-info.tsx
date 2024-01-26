import * as React from 'react';
import { Grid, TextField } from '@mui/material';
import { IBillingInfoProps } from './billing-info.interface';
import { withClasses } from './billing-info.css';
import { useTranslation } from 'react-i18next';
import { useWidgetStateStore } from '@cashier/widget/client/logic';
import { observer } from 'mobx-react';

export const BillingInfo = observer((props: IBillingInfoProps) => {
  const { cornerRadius, fieldColor, lineColor } = props;
  const fieldStyles = {
    backgroundColor: fieldColor,
    cornerRadius,
    borderColor: lineColor,
  };
  const [t] = useTranslation();
  const classes = withClasses();

  const widgetStateStore = useWidgetStateStore();
  const { billingInfo } = widgetStateStore;

  const handleChange = React.useCallback((key, value) => {
    widgetStateStore.updateBillingInfo({
      ...billingInfo,
      [key]: value.target.value,
    });
  }, [billingInfo]);

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.longBlock} xs={12}>
        <TextField
          style={fieldStyles}
          value={billingInfo.address}
          onChange={(value) => handleChange('address', value)}
          required
          fullWidth
          placeholder={t('Address')}
        />
      </Grid>
      <Grid item className={classes.longBlock} xs={12}>
        <TextField
          style={fieldStyles}
          value={billingInfo.country}
          onChange={(value) => handleChange('country', value)}
          required
          fullWidth
          placeholder={t('Country')}
        />
      </Grid>
      <Grid item className={classes.longBlock} xs={12}>
        <TextField
          style={fieldStyles}
          value={billingInfo.city}
          onChange={(value) => handleChange('city', value)}
          required
          fullWidth
          placeholder={t('City')}
        />
      </Grid>
      <Grid item className={classes.shortBlockLeft} xs={6} pr={1}>
        <TextField
          style={fieldStyles}
          value={billingInfo.state}
          onChange={(value) => handleChange('state', value)}
          required
          fullWidth
          placeholder={t('State')}
        />
      </Grid>
      <Grid item className={classes.shortBlockRight} xs={6} pl={1}>
        <TextField
          style={fieldStyles}
          value={billingInfo.postCode}
          onChange={(value) => handleChange('postCode', value)}
          required
          fullWidth
          placeholder={t('Post Code')}
        />
      </Grid>
      <Grid item className={classes.longBlock} xs={12}>
        <TextField
          style={fieldStyles}
          value={billingInfo.phoneNumber}
          onChange={(value) => handleChange('phoneNumber', value)}
          required
          fullWidth
          placeholder={t('Phone Number')}
        />
      </Grid>
    </Grid>
  );
});
