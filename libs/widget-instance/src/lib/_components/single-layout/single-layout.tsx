import * as React from 'react';
import { Card, Grid } from '@mui/material';
import { ISingleLayoutProps } from './single-layout.interface';
import { withClasses } from './single-layout.css';

export const SingleLayout = (props: ISingleLayoutProps) => {
  const {
    leftColumnComponent,
    rightColumnComponent,
  } = props;
  const classes = withClasses();

  return (
    <Card>
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
};
