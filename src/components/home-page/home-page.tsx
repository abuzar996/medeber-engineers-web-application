// import HomePageLayout from "./layout/home-page-layout";
// import { Flex } from "antd";
// import Footer from "./containers/footer";
// import FeaturedProjects from "./containers/featured";
// import Main from "./containers/main";
// import NewsLetter from "./containers/news-letter";
import CustomHead from "./commons/custom-head";
const HomePage = () => {
  return (
    <div className="h-full w-full">
      <CustomHead />
      {/* <HomePageLayout>
        <Flex vertical className="w-full ">
          <Main />
          <FeaturedProjects />
          <NewsLetter />
          <Footer />
        </Flex>
      </HomePageLayout> */}
    </div>
  );
};
export default HomePage;
