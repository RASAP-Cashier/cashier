import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import 'nprogress/nprogress.css';
import { App } from './app/app';
import { SidebarProvider } from '@cashier/components';
import React, { StrictMode } from 'react';
import { RootStoreProvider } from '@cashier/auth/client/logic';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HelmetProvider>
    <SidebarProvider>
      <RootStoreProvider>
        <BrowserRouter>
          <StrictMode>
            <App />
          </StrictMode>
        </BrowserRouter>
      </RootStoreProvider>
    </SidebarProvider>
  </HelmetProvider>
);
