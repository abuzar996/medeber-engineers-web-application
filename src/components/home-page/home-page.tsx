import HomePageLayout from "./layout/home-page-layout";
import { Flex } from "antd";
import Footer from "./containers/footer";
import Main from "./containers/main";

const HomePage = () => {
  return (
    <HomePageLayout>
      <Flex vertical className="w-full ">
        <Main />
        <Footer />
      </Flex>
    </HomePageLayout>
  );
};
export default HomePage;
