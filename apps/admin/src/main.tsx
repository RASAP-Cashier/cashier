import { HelmetProvider } from 'react-helmet-async';
import 'nprogress/nprogress.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SuspenseLoader } from '@cashier/components';
import React, { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RootStoreProvider } from '@cashier/auth/client/logic';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';

const Loader = Component => props =>
  <Suspense fallback={<SuspenseLoader/>}>
    <Component {...props} />
  </Suspense>;

const SidebarProvider = Loader(
  lazy(
    () => import(
      '@cashier/components'
      ).then(result => ({ default: result.SidebarProvider })),
  ),
);

const container = document.getElementById('root') || document.createElement('div');
const root = createRoot(container);
root.render(
  <HelmetProvider>
    <SidebarProvider>
      <RootStoreProvider>
        <BrowserRouter>
          <StrictMode>
            <App/>
          </StrictMode>
        </BrowserRouter>
      </RootStoreProvider>
    </SidebarProvider>
  </HelmetProvider>,
);
