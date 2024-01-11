import { makeStyles } from '@mui/styles';
import { IMUITheme } from '@cashier/theme';
import { Styles } from '@mui/styles/withStyles';

export const makeWithClasses = <Props extends object = object,
  ClassKey extends string = string,
  >(styles: Styles<IMUITheme, Props, ClassKey>) => makeStyles<IMUITheme>(styles);
