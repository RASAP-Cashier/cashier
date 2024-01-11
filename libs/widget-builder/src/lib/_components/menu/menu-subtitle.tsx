import { Typography } from '@mui/material';
import * as React from 'react';

export const MenuSubtitle = (props: { text: string }) => {
  const { text } = props;

  return (
    <Typography variant="h6">
      {text}
    </Typography>
  );
};
