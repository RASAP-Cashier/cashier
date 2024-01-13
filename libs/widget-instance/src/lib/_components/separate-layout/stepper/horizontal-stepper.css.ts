import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {},
  button: {
    backgroundColor: 'transparent',
    color: theme.base.palette.on.$on_primary,
  },
}));
