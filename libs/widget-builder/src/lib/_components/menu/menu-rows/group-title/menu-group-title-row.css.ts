import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    ...theme.base.fonts.heading.heading_2,
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.base.spacings.$unit * 5,
  },
}));
