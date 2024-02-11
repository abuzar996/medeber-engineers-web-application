import "./App.css";
import HomePage from "./components/home-page";
import Main from "./assets/Images/main7.png";
import "./components/home-page/layout/scroll.css";
function App() {
  return (
    <div
      id="element"
      style={{
        backgroundImage: `url(${Main})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <HomePage />
    </div>
  );
}

export default App;
