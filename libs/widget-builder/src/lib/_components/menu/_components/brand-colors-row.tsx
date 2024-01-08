import { Box, Grid, styled, Typography } from '@mui/material';
import * as React from 'react';
import { MuiColorInput } from 'mui-color-input';
import { observer } from 'mobx-react';

const LeftColumn = styled(Box)(
  ({ theme }) => `
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: center;
`,
);

const RightColumn = styled(Box)(
  ({ theme }) => `
        text-align: right;
`,
);

export const BrandColorsRow = observer(() => {
  return (
    <>
      <Grid item xs={6}>
        <LeftColumn>
          <Typography variant="h5" component="h5">
            Brand colors
          </Typography>
        </LeftColumn>
      </Grid>
      <Grid item xs={6}>
        <RightColumn>
          <MuiColorInput value={''} onChange={() => null} format={'hex'}/>
        </RightColumn>
      </Grid>
    </>
  );
});
