import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./routes/AppRouter";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AppRouter />
    </ThemeProvider>
  </StrictMode>
);
