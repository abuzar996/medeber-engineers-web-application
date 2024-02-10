import { Flex } from "antd";
import { ReactNode } from "react";
import NavBar from "../containers/navbar";
interface HomePageLayoutProps {
  children: ReactNode;
}
import "./scroll.css";
const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div className="no-scrollbar" id="element">
      <Flex
        flex="1"
        style={{
          height: "fit-content",
          position: "fixed",
          zIndex: 10000,
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <NavBar />
      </Flex>
      <Flex flex="1" style={{ position: "relative", top: "55px" }}>
        {children}
      </Flex>
    </div>
  );
};

export default HomePageLayout;
