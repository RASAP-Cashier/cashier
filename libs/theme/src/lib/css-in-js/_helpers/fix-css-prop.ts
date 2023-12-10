import { omitBy, isNil, isArray, flatten } from 'lodash';
import { IBaseElementCssStyles } from '../emotion.interface';

export const fixCssProp = <T extends { css: IBaseElementCssStyles }>(object: T) =>
  isArray(object) ? flatten(object) : omitBy(object, isNil);
