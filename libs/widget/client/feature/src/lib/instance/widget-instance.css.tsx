import { makeWithClasses } from '@cashier/theme';
import { maxWidgetHeight } from './widget-instance.const';

export const withClasses = makeWithClasses((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: maxWidgetHeight,
  },
}))
