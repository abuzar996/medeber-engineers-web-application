import HomePageLayout from "./layout/home-page-layout";
import { Flex } from "antd";
import Footer from "./containers/footer";
const HomePage = () => {
  return (
    <HomePageLayout>
      <Flex vertical className="w-full">
        <div className="h-[900px]">Hello world</div>
        <Footer />
      </Flex>
    </HomePageLayout>
  );
};
export default HomePage;
