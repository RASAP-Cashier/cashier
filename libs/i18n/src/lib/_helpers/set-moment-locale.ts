import { Language } from '@wt-nx/wt-cs/language';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment');
import 'moment/min/locales';

export function setMomentLocale(lang: Language) {
  let momentLocale = lang.toString();

  if (lang === Language.cz) {
    momentLocale = 'cs';
  }
  if (lang === Language.cn) {
    momentLocale = 'zh-cn';
  }
  if (lang === Language.ae) {
    momentLocale = 'ar-sa';
  }
  if (lang === Language.my) {
    momentLocale = 'ms-my';
  }
  if (lang === Language.ua) {
    momentLocale = 'uk';
  }
  if (lang === Language.vn) {
    momentLocale = 'vi';
  }
  moment.locale(momentLocale);
}
