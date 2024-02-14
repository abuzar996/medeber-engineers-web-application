import "./App.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./components/home-page/layout/scroll.css";
const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    //window.scrollTop();
  }, [pathname]);
};

function App() {
  ScrollToTop();
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
