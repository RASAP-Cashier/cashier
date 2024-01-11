import { makeWithClasses } from '@cashier/theme';
import { maxWidgetHeight } from './widget-instance.const';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    width: '100%',
    height: maxWidgetHeight,
  },
}))
