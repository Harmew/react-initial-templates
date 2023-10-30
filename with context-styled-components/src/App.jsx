// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Provider Context
import { CounterContextProvider } from "./context/CounterContext.jsx";

// Styled Components Provider
import { ThemeProvider } from "styled-components";

// Global Style
import GlobalStyle from "./styles/globalStyle";

// Theme
import theme from "./styles/theme";

// Page
import Home from "./page/Home.jsx";

function App() {
  return (
    <main className="container">
      <CounterContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CounterContextProvider>
    </main>
  );
}

export default App;
