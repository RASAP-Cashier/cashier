import type { IButtonMixin, IGetThemeButtonsParams, IThemeButtons } from './theme-buttons.interface';
import { $characterSpacing0 } from '../../_base/fonts';

const getMenuButton = (params: IGetThemeButtonsParams): IButtonMixin => {
  const { spacings, palette } = params;
  const { surfaces } = palette;

  return {
    color: 'inherit',
    backgroundColor: surfaces.$surf_secondary_3,
    padding: spacings.$padding_1,
    height: spacings.$unit * 4.5,
    width: spacings.$unit * 4.5,
    borderRadius: spacings.$unit * 4.5,
    lineHeight: spacings.$unit * 2.5,
    letterSpacing: $characterSpacing0,
  };
};

export const getThemeButtons = (params: IGetThemeButtonsParams): IThemeButtons => {
  return {
    $menu: getMenuButton(params),
  };
};
