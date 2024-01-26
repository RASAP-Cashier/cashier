import { makeWithClasses } from '@cashier/theme';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    ...theme.base.fonts.heading.heading_3,
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));
