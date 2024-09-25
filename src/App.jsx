import SideBar from "./component/sideBar/SideBar";
import "./App.scss";
import Dashboard from "./component/dashBoard/Dashboard";

const App = () => {
  return (
    <>
      <div className="appContainer">
        <SideBar />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
