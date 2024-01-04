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
    <Grid container xs={12} direction="row" columnSpacing={{ xs: 8 }}>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <Grid container item xs direction={'column'}x>
        <Grid item xs>
          <Box maxWidth style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingTop: 40,
          }}>
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
          <Card maxWidth style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            minHeight: 600,
          }}>
            {!previewMode && <Box p={2}><WidgetInstance /></Box>}
            {previewMode &&
              <iframe src={widgetUrl} width="100%" height="600" frameBorder="0">Browser not compatible.</iframe>}
          </Card>
        </Grid>
        <Grid item xs>
          <Box maxWidth style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingTop: 10,
          }}>
            <Typography variant="h5" component="h5">
              Save
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
