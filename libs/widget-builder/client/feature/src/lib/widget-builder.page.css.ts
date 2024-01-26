import { makeWithClasses } from '@cashier/theme';
import { maxWidgetHeight } from '@cashier/widget/client/feature';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    backgroundColor: theme.base.palette.surfaces.$surf_primary_1,
    padding: theme.base.spacings.$unit * 10,
  },
  widgetWrapper: {
    display: 'flex',
    flex: 1,
  },
  menuColumn: {
    width: theme.base.spacings.$unit * 72,
  },
  widgetColumn: {
    height: maxWidgetHeight,
  }
}))
