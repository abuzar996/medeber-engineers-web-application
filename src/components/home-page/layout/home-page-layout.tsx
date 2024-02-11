import { Flex } from "antd";
import { ReactNode } from "react";
import NavBar from "../containers/navbar";
interface HomePageLayoutProps {
  children: ReactNode;
}
import "./scroll.css";
const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <Flex vertical style={{ height: "100vh" }}>
      <Flex
        style={{
          maxHeight: "fit-content",
        }}
      >
        <NavBar />
      </Flex>
      <Flex
        flex="1"
        id="element"
        style={{
          height: "calc(100vh - 55px)",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default HomePageLayout;
