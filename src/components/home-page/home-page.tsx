import HomePageLayout from "./layout/home-page-layout";
import { Flex } from "antd";
import Footer from "./containers/footer";
//import FeaturedProjects from "./containers/featured";
//import Main from "./containers/main";
import NewsLetter from "./containers/news-letter";
//import CustomContainer from "./commons/custom-container";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="h-full w-full">
      <HomePageLayout>
        <Flex vertical className="w-full ">
          <Outlet />
          <NewsLetter />
          <Footer />
        </Flex>
      </HomePageLayout>
    </div>
  );
};
export default HomePage;
