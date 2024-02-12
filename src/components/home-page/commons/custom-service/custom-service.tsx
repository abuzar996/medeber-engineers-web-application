import { Flex } from "antd";
import CustomServiceHead from "./custom-service-head";
import CustomServiceIntro from "./custom-service-intro";
const CustomService = () => {
  return (
    <Flex className="w-full" flex="1" vertical align="center">
      <CustomServiceHead />

      <CustomServiceIntro />

      {/* <CustomServiceIntro /> */}
    </Flex>
  );
};

export default CustomService;
