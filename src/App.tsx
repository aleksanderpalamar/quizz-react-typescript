import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router/Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import LanguageProvider from "./context/LanguageContext";

export function App() { 
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <LanguageProvider>
          <Router />
        </LanguageProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
