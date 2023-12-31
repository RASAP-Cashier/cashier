import * as React from 'react';
import { Box, Typography } from '@mui/material';

interface IBoxTitleProps {
  title: string;
}

export const BoxTitle = (props: IBoxTitleProps) => {
  const { title } = props;

  return (
    <Box p={1} style={{
      marginBottom: 5,
    }}>
      <Typography variant="h5" component="h5">
        {title}
      </Typography>
    </Box>
  );
};
