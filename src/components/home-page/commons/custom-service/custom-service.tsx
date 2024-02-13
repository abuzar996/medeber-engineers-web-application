import { Flex } from "antd";
import CustomServiceHead from "./custom-service-head";
import CustomServiceIntro from "./custom-service-intro";
import CustomProjects from "./custom-projects";
import CustomNews from "./custom-news-section";
import CustomInfo from "./custom-info-section";
const CustomService = () => {
  return (
    <Flex className="w-full" flex="1" vertical align="center">
      <CustomServiceHead />
      <CustomServiceIntro />
      <CustomProjects />
      <CustomInfo />
      <CustomNews />
    </Flex>
  );
};

export default CustomService;
