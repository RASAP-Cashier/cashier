import * as React from 'react';
import { Button, Container, Grid, Paper } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import { IWidgetInstanceProps } from './widget-instance.interface';

export function WidgetInstance(props: IWidgetInstanceProps) {
  const { settings } = props;

  console.log(settings);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} style={{
        color: settings.brandColor
      }}>
        <Grid container spacing={3}>
          {/* PaymentDetails */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'row',
                height: 60,
              }}
            >
              PaymentDetails
            </Paper>
          </Grid>
          {/* YouPayBy */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 80,
              }}
            >
              YouPayBy
            </Paper>
          </Grid>
          {/* Amount */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 80,
              }}
            >
              Amount
              <Button variant="contained" title={settings.buttonText}>{settings.buttonText}</Button>
            </Paper>
          </Grid>
          {/* BillingInformation */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              BillingInformation
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Copyright sx={{ pt: 4 }}/>
    </>
  );
}
