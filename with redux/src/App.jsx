// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Provider redux
import { Provider } from "react-redux";

// Store
import store from "./store/configureStore";

// Components
import Home from "./page/Home.jsx";

function App() {
  return (
    <main className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
