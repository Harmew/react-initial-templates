// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Provider redux
import { Provider } from "react-redux";

// Store
import store from "./store/configureStore";

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </main>
  );
}

export default App;
