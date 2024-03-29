import { StrictMode } from 'react';
import { App } from './app/app';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') || document.createElement('div');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App/>
  </StrictMode>,
);
