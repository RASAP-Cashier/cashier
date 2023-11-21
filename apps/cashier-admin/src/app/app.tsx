import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { SideNav } from '@cashier/components';
import theme from '../../../../libs/theme/src/lib/theme';
import themeDark from '../../../../libs/theme/src/lib/theme-dark';
import { appRoutes, defaultRoute } from './app.routes';
import { setMiniSidenav, useMaterialUIController } from '@cashier/context';
import brandWhite from '../../../../libs/theme/src/lib/_images/logo-ct.png';
import brandDark from '../../../../libs/theme/src/lib/_images/logo-ct-dark.png';

export function App() {
  const [controller] = useMaterialUIController();
  const {
    darkMode,
  } = controller;
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key}/>;
      }

      return null;
    });

  return (
    <ThemeProvider theme={darkMode
      ? themeDark
      : theme}>
      <CssBaseline/>
      <Routes>
        {getRoutes(appRoutes)}
        <Route path="*" element={<Navigate to={`/${defaultRoute}`}/>}/>
      </Routes>
    </ThemeProvider>
  );
}
