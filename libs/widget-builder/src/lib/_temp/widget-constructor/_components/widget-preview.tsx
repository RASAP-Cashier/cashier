import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export function WidgetPreview() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* PaymentDetails */}
        <Grid item xs={12} md={12} lg={2}>
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
  );
}
