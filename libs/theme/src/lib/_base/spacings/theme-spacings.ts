import { IThemeSpacings } from './theme-spacings.interface';

const $unit = 0.4 * 10;

export const themeSpacings: IThemeSpacings = {
  $unit,
  $padding_1: $unit,
  $padding_2: $unit * 2,
  $border_radius_1: $unit * 2,
  $border_radius_2: $unit * 2,
};
