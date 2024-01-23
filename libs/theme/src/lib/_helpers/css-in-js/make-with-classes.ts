import { makeStyles } from '@mui/styles';
import { IMUITheme } from '../../theme.interface';
import { Styles } from '@mui/styles/withStyles';

export const makeWithClasses = <Props extends object = object,
  ClassKey extends string = string,
  >(styles: Styles<IMUITheme, Props, ClassKey>) => makeStyles<IMUITheme, Props, ClassKey>(styles);
