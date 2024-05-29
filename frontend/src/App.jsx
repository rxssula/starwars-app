import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import People from "./pages/People";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="max-w-7xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/species" element={<Species />} />
          <Route path="/people" element={<People />} />
          <Route path="/starships" element={<Starships />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
