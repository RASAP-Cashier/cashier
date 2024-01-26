import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  step1Container: {
    width: theme.base.spacings.$unit * 100,
    padding: theme.base.spacings.$unit * 5,
    height: '100%'
  },
}));
