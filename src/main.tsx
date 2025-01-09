import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./routes/AppRouter";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

import { Provider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
