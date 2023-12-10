import { Button } from '@mui/material';
import { IButtonProps } from './button.interface';

export const ButtonC = (props: IButtonProps) => {
  const { type, text, styles, disabled } = props;

  return (
    <Button
      disabled={disabled}
      sx={styles || {}}
      variant="contained"
      color={type}
    >
      {text}
    </Button>
  );
}
