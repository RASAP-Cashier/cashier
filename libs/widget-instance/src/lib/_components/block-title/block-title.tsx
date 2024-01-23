import * as React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { withClasses } from './block-title.css';

interface IBlockTitleProps {
  titleKey: string; // keyof ILocalization;
}

export const BlockTitle = (props: IBlockTitleProps) => {
  const { titleKey } = props;
  const [t] = useTranslation();
  const classes = withClasses();

  return (
    <Box className={classes.container}>
      {t(titleKey)}
    </Box>
  );
};
