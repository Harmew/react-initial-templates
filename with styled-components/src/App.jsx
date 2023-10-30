// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styled Components
import { ThemeProvider } from "styled-components";

// Global Styles
import GlobalStyle from "./styles/globalStyle";

// Theme
import theme from "./styles/theme";

// Components
import Home from "./page/Home";

function App() {
  return (
    <main className="container">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  );
}

export default App;
