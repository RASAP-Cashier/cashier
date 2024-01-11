import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    ...theme.base.fonts.heading.heading_3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  control: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));
