import * as React from 'react';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Box, Card, Grid, styled, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import { WidgetInstance } from '@cashier/widget-instance';
import { Menu } from './_components';

export function WidgetBuilderPage() {
  // const { state }: { state: { id?: number } } = useLocation();
  const widgetUrl = 'http://localhost:4201';
  const [previewMode, setPreviewMode] = useState<boolean>(false);

  return (
    <Grid container direction="row" columnSpacing={{ xs: 8 }}>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <Grid container item xs direction={'column'}>
        <Grid item xs>
          <Box style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingTop: 40,
          }}>
            <Typography variant="h5" component="h5" pr={10}>
              Reset
            </Typography>
            <Typography variant="h5" component="h5" pr={10}>
              Save
            </Typography>
            <Switch
              checked={previewMode}
              onChange={() => setPreviewMode(!previewMode)}
            />
            <Typography variant="h5" component="h5">
              {previewMode
                ? 'Preview Mode'
                : 'Edit Mode'}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Card style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            minHeight: 600,
          }}>
            {!previewMode && <WidgetInstance />}
            {previewMode &&
              <iframe src={widgetUrl} width="100%" height="600" frameBorder="0">Browser not compatible.</iframe>}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
