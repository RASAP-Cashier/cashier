import * as React from 'react';
import { Card, Grid } from '@mui/material';
import { ISingleLayoutProps } from './single-layout.interface';
import { withClasses } from './single-layout.css';
import { useWidgetSettingsStore } from '../../_stores';
import { observer } from 'mobx-react';

export const SingleLayout = observer((props: ISingleLayoutProps) => {
  const {
    leftColumnComponent,
    rightColumnComponent,
  } = props;
  const classes = withClasses();

  const widgetSettingsStore = useWidgetSettingsStore();
  const {
    font, fontSize,
    backgroundColor,
    textColor,
  } = widgetSettingsStore.styles;

  return (
    <Card style={{
      fontFamily: font,
      fontSize,
      backgroundColor,
      color: textColor,
    }}>
      <Grid container className={classes.container}>
        <Grid container item xs={6} direction="column" className={classes.leftColumn}>
          {leftColumnComponent}
        </Grid>
        <Grid container item xs={6} direction="column" className={classes.rightColumn}>
          {rightColumnComponent}
        </Grid>
      </Grid>
    </Card>
  );
});
