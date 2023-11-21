import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/app";
import { MaterialUIControllerProvider } from "../../../libs/context/src/lib/app-context";

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
