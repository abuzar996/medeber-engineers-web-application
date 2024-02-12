import HomePageLayout from "./layout/home-page-layout";
import { Flex } from "antd";
import Footer from "./containers/footer";

import NewsLetter from "./containers/news-letter";
//import CustomService from "./commons/custom-service/custom-service";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="h-full w-full">
      <HomePageLayout>
        <Flex vertical className="w-full h-full ">
          <Outlet />
          {/* <div>
            <CustomService />
          </div> */}
          <NewsLetter />
          <Footer />
        </Flex>
      </HomePageLayout>
    </div>
  );
};
export default HomePage;
