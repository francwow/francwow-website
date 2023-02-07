import { useState } from "react";
import Header from "./Header";
import MainSection from "./MainSection";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="main-wrapper">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <MainSection menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
}

export default App;
