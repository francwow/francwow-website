import { useState } from "react";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Header from "./Header";
import MainSection from "./MainSection";
import Overlay from "./Overlay";
import MenuActiveContext from "./contexts/menuActiveContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <MenuActiveContext.Provider value={menuActive}>
          <Overlay setMenuActive={setMenuActive} />
          <Header setMenuActive={setMenuActive} />
          <Routes>
            <Route
              path="/"
              element={<MainSection setMenuActive={setMenuActive} />}
            />
            <Route
              path="/about"
              element={<About setMenuActive={setMenuActive} />}
            />
            <Route
              path="/work"
              element={<Work setMenuActive={setMenuActive} />}
            />
            <Route
              path="/contact"
              element={<Contact setMenuActive={setMenuActive} />}
            />
          </Routes>
        </MenuActiveContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
