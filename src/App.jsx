import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="wrapper">
      <Sidebar ToggleMenu={ToggleMenu} setToggleMenu={setToggleMenu} />
      <Main setToggleMenu={setToggleMenu} />
    </div>
  );
}

export default App;
