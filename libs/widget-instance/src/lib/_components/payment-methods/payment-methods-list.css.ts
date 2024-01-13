import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  listContainer: {
  },
  sliderContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    paddingTop: theme.base.spacings.$unit * 4,
    paddingBottom: theme.base.spacings.$unit * 5,
  },
  listItem: {
    paddingTop: theme.base.spacings.$unit,
  },
}));
