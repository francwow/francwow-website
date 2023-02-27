import { useState } from "react";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Header from "./Header";
import MainSection from "./MainSection";
import Overlay from "./Overlay";
import MenuActiveContext from "./contexts/menuActiveContext";
import LanguageContext from "./contexts/languageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [englishActive, setEnglishActive] = useState(true);

  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <LanguageContext.Provider value={{ englishActive, setEnglishActive }}>
          <MenuActiveContext.Provider value={{ menuActive, setMenuActive }}>
            <Overlay />
            <Header />
            <Routes>
              <Route path="/" element={<MainSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MenuActiveContext.Provider>
        </LanguageContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
