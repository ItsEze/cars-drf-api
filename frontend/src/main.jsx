import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from './Root.jsx'
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <Root />
    </NextUIProvider>
  </React.StrictMode>,
)
