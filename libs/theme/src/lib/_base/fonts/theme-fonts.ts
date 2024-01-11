import {
  body_1,
  button_1,
  button_2,
  data_1,
  data_2,
  data_3,
  data_4,
  heading_1,
  heading_2,
  heading_3,
  heading_4,
  heading_5,
  heading_6, navigation_1, status_1,
} from './theme-fonts.mixin';
import { IThemeFonts } from './theme-fonts.interface';

export const themeFonts: IThemeFonts = {
  heading: {
    heading_1,
    heading_2,
    heading_3,
    heading_4,
    heading_5,
    heading_6,
  },
  data: {
    data_1,
    data_2,
    data_3,
    data_4,
  },
  button: {
    button_1,
    button_2
  },
  navigation: { navigation_1 },
  status: { status_1 },
  body: { body_1 },
};
