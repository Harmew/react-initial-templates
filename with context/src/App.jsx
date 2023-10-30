// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Provider Context
import { CounterContextProvider } from "./context/CounterContext.jsx";

// Page
import Home from "./page/Home.jsx";

function App() {
  return (
    <main className="container">
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </main>
  );
}

export default App;
