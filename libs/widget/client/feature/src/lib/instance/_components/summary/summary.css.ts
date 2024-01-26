import { makeWithClasses } from '@cashier/theme';

const getRowStyles = (theme) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...theme.base.fonts.data.data_2,
  paddingTop: theme.base.spacings.$unit,
  paddingBottom: theme.base.spacings.$unit,
});

export const withClasses = makeWithClasses((theme) => ({
  container: {
  },
  titleContainer: {
  },
  contentContainer: {
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'column',
  },
  row: {
    ...getRowStyles(theme),
  },
  value: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  totalRow: {
    ...getRowStyles(theme),
    ...theme.base.fonts.heading.heading_3,
  },
  argeementBlock: {
    ...theme.base.fonts.data.data_4,
    paddingTop: theme.base.spacings.$unit * 2,
    paddingBottom: theme.base.spacings.$unit,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyLogoBlock: {
  },
  footer: {
    justifyContent: 'center',
  },
}));
