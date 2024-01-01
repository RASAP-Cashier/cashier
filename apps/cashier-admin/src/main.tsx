import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import 'nprogress/nprogress.css';
import { App } from './app/app';
import { SidebarProvider } from '@cashier/components';
import ReactDOM from 'react-dom';
import React from 'react';
import { RootStoreProvider } from '@cashier/auth';

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <RootStoreProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </RootStoreProvider>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root'),
);
