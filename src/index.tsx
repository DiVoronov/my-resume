import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

import { contentLanguages, LanguageContext } from "./app/context/context";
import { themes, ThemeContext } from "./app/context/themeContext/themeContext";
import { ParallaxProvider } from "react-scroll-parallax";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContext.Provider value={themes}>
        <LanguageContext.Provider value={contentLanguages}>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  </React.StrictMode>
);