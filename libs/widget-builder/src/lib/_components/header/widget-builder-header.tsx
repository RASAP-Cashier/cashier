import { Box, Grid, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import * as React from 'react';
import { withClasses } from './widget-builder-header.css';
import { useTranslation } from 'react-i18next';

export const WidgetBuilderHeader = (props) => {
  const { previewMode, setPreviewMode } = props;
  const classes = withClasses();
  const [t] = useTranslation();

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.leftColumn}>
          { t('Transaction Customise') }
      </Grid>
      <Grid item className={classes.rightColumn}>
        <Typography variant="h5" component="h5" pr={5}>
          Reset
        </Typography>
        <Typography variant="h5" component="h5" pr={5}>
          Save
        </Typography>
        <Switch
          checked={previewMode}
          onChange={() => setPreviewMode(!previewMode)}
        />
        <Typography variant="h5" component="h5">
          {previewMode
            ? t('Preview Mode')
            : t('Edit Mode')}
        </Typography>
      </Grid>
    </Grid>
  );
};
