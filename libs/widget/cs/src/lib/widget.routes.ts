const baseUrl = 'widget';

export const WidgetRoutes = {
  Settings: `${baseUrl}/settings`,
  Pay: `${baseUrl}/pay`,
};

const baseRoute = '/widget-settings';

export const WidgetSettingsRoutes = {
  Get: `${baseRoute}/:id`,
  GetByUserId: `${baseRoute}/by-user-id`,
  Delete: `${baseRoute}/:id`,
  Create: `${baseRoute}`,
};
