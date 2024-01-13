import { makeWithClasses } from '@cashier/theme';
import { maxWidgetHeight, maxWidgetWidth } from '@cashier/widget-instance';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    backgroundColor: theme.base.palette.surfaces.$surf_primary_1,
    padding: theme.base.spacings.$unit * 10,
  },
  menuColumn: {
    width: theme.base.spacings.$unit * 72,
  },
  widgetColumn: {
    height: maxWidgetHeight,
  },
}))
