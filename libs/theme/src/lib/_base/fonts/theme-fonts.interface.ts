import { CSSObject } from '../../_helpers/css-in-js/emotion.interface';

export type IFontMixin = Partial<Pick<CSSObject,
  'fontFamily' | 'fontStyle' | 'fontWeight' | 'fontSize' | 'lineHeight' | 'letterSpacing' | 'textTransform'>>;

export interface IThemeFonts {
  heading: {
    heading_1: IFontMixin;
    heading_2: IFontMixin;
    heading_3: IFontMixin;
    heading_4: IFontMixin;
    heading_5: IFontMixin;
    heading_6: IFontMixin;
  };
  data: {
    data_1: IFontMixin;
    data_2: IFontMixin;
    data_3: IFontMixin;
    data_4: IFontMixin;
  };
  button: {
    button_1: IFontMixin;
    button_2: IFontMixin;
  };
  navigation: {
    navigation_1: IFontMixin;
  };
  status: {
    status_1: IFontMixin;
  };
  body: {
    body_1: IFontMixin;
  };
}
