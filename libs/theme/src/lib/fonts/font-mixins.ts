import { CSSObject } from '../css-in-js/emotion.interface';
import { $fontFamily, $fontFamilyBold, $fontFamilyMedium } from './font-family';
import {
  $characterSpacing0,
  $fontSize11,
  $fontSize12,
  $fontSize14,
  $fontSize16,
  $fontSize18,
  $fontSize8,
  $fontSize9,
  $fontStyleNormal,
  $fontWeightBold,
  $fontWeightMedium,
  $fontWeightNormal,
  $lineSpacing10,
  $lineSpacing11,
  $lineSpacing13,
  $lineSpacing16,
  $lineSpacing17,
  $lineSpacing19,
  $lineSpacing20,
  $lineSpacing22,
} from './font-vars';

export type ITypoMixin = Partial<Pick<CSSObject,
  'fontFamily' | 'fontStyle' | 'fontWeight' | 'fontSize' | 'lineHeight' | 'letterSpacing' | 'textTransform'>>;

export const button_label_1: ITypoMixin = {
  fontFamily: $fontFamilyMedium,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightMedium,
  fontSize: $fontSize11,
  lineHeight: $lineSpacing13,
  letterSpacing: $characterSpacing0,
};

export const data_1: ITypoMixin = {
  fontFamily: $fontFamily,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightNormal,
  fontSize: $fontSize18,
  lineHeight: $lineSpacing22,
  letterSpacing: $characterSpacing0,
};

export const data_2: ITypoMixin = {
  fontFamily: $fontFamily,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightNormal,
  fontSize: $fontSize14,
  lineHeight: $lineSpacing17,
  letterSpacing: $characterSpacing0,
};

export const data_3: ITypoMixin = {
  fontFamily: $fontFamily,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightNormal,
  fontSize: $fontSize9,
  lineHeight: $lineSpacing11,
  letterSpacing: $characterSpacing0,
};

export const data_4: ITypoMixin = {
  fontFamily: $fontFamily,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightNormal,
  fontSize: $fontSize11,
  lineHeight: $lineSpacing13,
  letterSpacing: $characterSpacing0,
};

export const data_status: ITypoMixin = {
  fontFamily: $fontFamily,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightNormal,
  fontSize: $fontSize8,
  lineHeight: $lineSpacing10,
  letterSpacing: $characterSpacing0,
};

export const data_tab = data_4;
export const data_navigation = data_4;

export const headline_1: ITypoMixin = {
  fontFamily: $fontFamilyMedium,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightBold,
  fontSize: $fontSize18,
  lineHeight: $lineSpacing22,
  letterSpacing: $characterSpacing0,
};

export const headline_2: ITypoMixin = {
  fontFamily: $fontFamilyMedium,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightBold,
  fontSize: $fontSize16,
  lineHeight: $lineSpacing19,
  letterSpacing: $characterSpacing0,
};

export const headline_data: ITypoMixin = {
  fontFamily: $fontFamilyMedium,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightMedium,
  fontSize: $fontSize11,
  lineHeight: $lineSpacing13,
  letterSpacing: $characterSpacing0,
};

export const headline_tab: ITypoMixin = {
  fontFamily: $fontFamilyBold,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightBold,
  fontSize: $fontSize11,
  lineHeight: $lineSpacing13,
  letterSpacing: $characterSpacing0,
};

export const input_1: ITypoMixin = {
  fontFamily: $fontFamily,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightNormal,
  fontSize: $fontSize16,
  lineHeight: $lineSpacing20,
  letterSpacing: $characterSpacing0,
  //color:  var(onErrorLight)
};

export const notification_1: ITypoMixin = {
  fontFamily: $fontFamily,
  fontStyle: $fontStyleNormal,
  fontWeight: $fontWeightNormal,
  fontSize: $fontSize12,
  lineHeight: $lineSpacing16,
  letterSpacing: $characterSpacing0,
  //color:  var(onTertiaryLight)
};
