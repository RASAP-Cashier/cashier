import * as React from 'react';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { getWidgetConfig, WidgetInstance } from '@cashier/widget-instance';
import { WidgetBuilderHeader, WidgetBuilderMenu } from './_components';
import { withClasses } from './widget-builder.page.css';

export function WidgetBuilderPage() {
  const { url: widgetUrl } = getWidgetConfig();
  const [previewMode, setPreviewMode] = useState<boolean>(false);
  const classes = withClasses();

  return (
    <Grid container direction={'row'} className={classes.container}>
      <Grid item xs={12}>
        <WidgetBuilderHeader previewMode={previewMode} setPreviewMode={setPreviewMode}/>
      </Grid>
      <Grid item xs={12} className={classes.widgetWrapper}>
        <Grid item xs={3} className={classes.menuColumn}>
          <WidgetBuilderMenu/>
        </Grid>
        <Grid container item xs={9} direction={'column'} className={classes.widgetColumn}>
          {!previewMode && <WidgetInstance merchantInfo={{
            amount: 1500,
            tax: 50,
            vat: 10,
            currency: '$'
          }}/>}
          {previewMode &&
            <iframe src={widgetUrl} width="100%" height="600" frameBorder="0">Browser not compatible.</iframe>}
        </Grid>
      </Grid>
    </Grid>
  );
}
