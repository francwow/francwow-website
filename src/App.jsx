import { useState } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import Overlay from "./Overlay";
import MenuActiveContext from "./contexts/menuActiveContext";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="main-wrapper">
      <MenuActiveContext.Provider value={menuActive}>
        <Overlay setMenuActive={setMenuActive} />
        <Header setMenuActive={setMenuActive} />
        <MainSection setMenuActive={setMenuActive} />
      </MenuActiveContext.Provider>
    </div>
  );
}

export default App;
