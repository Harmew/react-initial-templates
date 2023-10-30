// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context
import { CounterContextProvider } from "./context/CounterContext.tsx";

// Components
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
