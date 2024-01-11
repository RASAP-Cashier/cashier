import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.base.spacings.$unit * 10,
  },
  leftColumn: {
    ...theme.base.fonts.heading.heading_1,
    width: theme.base.spacings.$unit * 72,
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rightColumn: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));
