import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    marginTop: theme.base.spacings.$unit * 5,
  },
  longBlock: {
    marginBottom: theme.base.spacings.$unit * 2,
  },
  shortBlockLeft: {
    marginBottom: theme.base.spacings.$unit * 2,
  },
  shortBlockRight: {
    marginBottom: theme.base.spacings.$unit * 2,
  },
}));
