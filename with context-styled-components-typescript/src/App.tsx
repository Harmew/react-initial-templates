// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context
import { CounterContextProvider } from "./context/CounterContext.tsx";

// Styled Components
import { ThemeProvider } from "styled-components";

// Global Styles
import GlobalStyle from "./styles/globalStyle";

// Theme
import theme from "./styles/theme";

// Components
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
