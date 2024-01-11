import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IBlockTitleProps {
  titleKey: string;
}

export const BlockTitle = (props: IBlockTitleProps) => {
  const { titleKey } = props;
  const [t] = useTranslation();

  return (
    <Box p={1} style={{
      marginBottom: 5,
    }}>
      <Typography variant="h5" component="h5">
        {t(titleKey)}
      </Typography>
    </Box>
  );
};
