declare global {
  const process: {
    env: {
      DB_API_URL: string;
      BASE_API_URL: string;
      WIDGET_URL: string;
    }
  };
}
