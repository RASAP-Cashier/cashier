import { CSSObject } from '@emotion/styled';

export enum ButtonType {
  Error = 'error',
  Success = 'success',
}


export type IButtonProps = {
  type: ButtonType;
  text: string;
  styles: CSSObject;
  disabled?: boolean;
}
