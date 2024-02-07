import "./App.css";
import HomePage from "./components/home-page";
import Main from "./assets/Images/main7.png";
import { Flex, Typography, theme } from "antd";
function App() {
  const { token } = theme.useToken();
  //const color1 = "#efc75e";
  //const color2 = "#1b1247";
  return (
    <div
      className="no-scrollbar"
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
      <Flex flex="1" justify="center" className="h-full no-scrollbar">
        <Typography
          style={{
            fontSize: token.fontSizeHeading1,
            fontWeight: token.fontWeightStrong,
            color: "#1b1247",
            marginTop: "20%",
          }}
        >
          MEDEBER ENGINEERS
        </Typography>
      </Flex>
    </div>
  );
}

export default App;
