// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./page/Home.js";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
