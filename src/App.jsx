import SideBar from "./component/sideBar/SideBar";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Dashboard from "./component/dashBoard/DashBoard";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="appContainer">
        <SideBar isOpen={isOpen} onMenuOpen={() => setOpen(!isOpen)} />
        <Dashboard onMenuOpen={() => setOpen(!isOpen)} />
      </div>
    </>
  );
};

export default App;
