import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    backgroundColor: theme.base.palette.surfaces.$surf_secondary_3,
    padding: theme.base.spacings.$unit * 5,
    paddingTop: theme.base.spacings.$unit * 2.5,
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.base.spacings.$unit * 2.5,
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
