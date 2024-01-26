import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingRight: theme.base.spacings.$unit * 5,
    flexGrow: 1,
    width: '100%'
  },
}));
