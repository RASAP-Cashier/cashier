import * as React from 'react';
import { Box, Card, TextField, Grid } from '@mui/material';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { BlockTitle } from '../block-title';
import { useTranslation } from 'react-i18next';
import { withClasses } from './card-details.css';
import { useWidgetStateStore } from '../../_stores';
import { observer } from 'mobx-react';

export const CardDetails = observer(() => {
  const [t] = useTranslation();
  const classes = withClasses();
  const widgetStateStore = useWidgetStateStore();
  const { cardInfo } = widgetStateStore;

  const handleChange = React.useCallback((key, value) => {
    widgetStateStore.updateCardInfo({
      ...cardInfo,
      [key]: value.target.value,
    });
  }, [cardInfo]);

  return (
    <Card>
      <Box className={classes.container}>
        <Box className={classes.titleContainer}>
          <BlockTitle titleKey={t('widget.cardDetailsTitle')}/>
          <CreditCardOutlinedIcon/> <CreditCardOutlinedIcon/> <CreditCardOutlinedIcon/> <CreditCardOutlinedIcon/> <CreditCardOutlinedIcon/>
        </Box>
        <Grid container>
          <Grid item xs={12} className={classes.longBlock}>
            <TextField
              value={cardInfo.cardNumber} // TODO доавить маску на номер карты
              onChange={(value) => handleChange('cardNumber', value)}
              required
              fullWidth
              placeholder={t('Card Number')}
            />
          </Grid>
          <Grid item xs={6} className={classes.shortBlockLeft} pr={1}>
            <TextField
              value={cardInfo.date?.toString()} // TODO доавить маску на дату + формат для вывода
              required
              fullWidth
              placeholder={t('MM / YYYY')}
            />
          </Grid>
          <Grid item xs={6} className={classes.shortBlockRight} pl={1}>
            <TextField
              value={cardInfo.CVC} // TODO доавить маску на CVC
              required
              fullWidth
              placeholder={t('CVC')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={cardInfo.cardHolderName}
              required
              fullWidth
              placeholder={t('Cardholder Name')}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
});
