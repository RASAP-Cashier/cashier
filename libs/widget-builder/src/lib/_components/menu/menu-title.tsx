import { Typography } from '@mui/material';
import * as React from 'react';

export const MenuTitle = (props: { text: string }) => {
  const { text } = props;

  return (
    <Typography variant="h4">
      {text}
    </Typography>
  );
};
