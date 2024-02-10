import HomePageLayout from "./layout/home-page-layout";
import { Flex } from "antd";
const HomePage = () => {
  return (
    <HomePageLayout>
      <Flex vertical>
        <div className="h-[900px]">Hello world</div>
      </Flex>
    </HomePageLayout>
  );
};
export default HomePage;
