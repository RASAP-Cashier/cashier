import i18next from 'i18next';
import type { ILocalization } from './localization/localization.interface';
import { parameterize } from './_helpers/parameterize';

export function t(key: keyof ILocalization, ...params: (number | string)[]): string {
  return params.length ? (i18next.t(key) ? parameterize(t(key), ...params) : '') : i18next.t(key);
}
