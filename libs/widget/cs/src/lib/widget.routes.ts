const baseUrl = 'widget';

export const WidgetRoutes = {
  Settings: `${baseUrl}/settings`,
  Pay: `${baseUrl}/pay`,
};

const baseRoute = 'widget-settings';

export const WidgetSettingsRoutes = {
  GetAll: `${baseRoute}/all`,
  Get: `${baseRoute}`,
  GetByUserId: `${baseRoute}/by-user-id`,
  Delete: `${baseRoute}`,
  Update: `${baseRoute}`,
  Create: `${baseRoute}`,
};
