import HomePageLayout from "./layout/home-page-layout";
import { Flex } from "antd";
import Footer from "./containers/footer";
import FeaturedProjects from "./containers/featured";
import Main from "./containers/main";
import NewsLetter from "./containers/news-letter";

const HomePage = () => {
  return (
    <HomePageLayout>
      <Flex vertical className="w-full ">
        <Main />
        <FeaturedProjects />
        <NewsLetter />
        <Footer />
      </Flex>
    </HomePageLayout>
  );
};
export default HomePage;
