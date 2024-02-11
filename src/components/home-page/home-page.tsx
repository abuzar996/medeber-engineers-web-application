import HomePageLayout from "./layout/home-page-layout";
import { Flex } from "antd";
import Footer from "./containers/footer";
import FeaturedProjects from "./containers/featured";
import Main from "./containers/main";

const HomePage = () => {
  return (
    <HomePageLayout>
      <Flex vertical className="w-full ">
        <Main />
        <FeaturedProjects />
        <Footer />
      </Flex>
    </HomePageLayout>
  );
};
export default HomePage;
