import * as React from 'react';
import { Grid } from '@mui/material';
import { ISingleLayoutProps } from './single-layout.interface';

export const SingleLayout = (props: ISingleLayoutProps) => {
  const {
    leftColumnComponent,
    rightColumnComponent,
  } = props;

  return (
    <Grid container>
      <Grid container item xs={6} direction="column">
        {leftColumnComponent}
      </Grid>
      <Grid container item xs={6} direction="column">
        {rightColumnComponent}
      </Grid>
    </Grid>
  );
};
