// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styled Components
import { ThemeProvider } from "styled-components";

// Global Styles
import GlobalStyle from "./styles/globalStyle";

// Redux
import { Provider } from "react-redux";

// Store
import store from "./store/configureStore";

// Theme
import theme from "./styles/theme";

// Components
import Home from "./page/Home";

function App() {
  return (
    <main className="container">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </main>
  );
}

export default App;
