import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    justifyContent: 'flex-start',
    height: '100%',
  },
  leftColumn: {
    padding: theme.base.spacings.$unit * 5,
    borderRight: `2px solid ${theme.base.palette.surfaces.$surf_primary_1}`
  },
  rightColumn: {
    padding: theme.base.spacings.$unit * 5,
  },
}));
