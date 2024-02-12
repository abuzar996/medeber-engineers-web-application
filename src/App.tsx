import "./App.css";
//import HomePage from "./components/home-page";
import { Outlet } from "react-router-dom";

import "./components/home-page/layout/scroll.css";

function App() {
  return (
    <div className="app">
      <Outlet />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
