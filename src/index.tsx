import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

import { contentLanguages, LanguageContext } from "./app/context/context";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageContext.Provider value={contentLanguages}>
        <App />
      </LanguageContext.Provider>
    </Provider>
  </React.StrictMode>
);