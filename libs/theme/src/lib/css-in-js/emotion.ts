import type { SerializedStyles } from '@emotion/react';
import { filter, isPlainObject } from 'lodash';
import { css } from '@emotion/react';
export { css } from '@emotion/react';

export const mergeClasses = (...serializedStyles: SerializedStyles[]): SerializedStyles => {
  return css`
    ${filter(serializedStyles, isPlainObject)}
  `;
};
