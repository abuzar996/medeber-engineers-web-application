import { Flex } from "antd";
import CustomServiceHead from "./custom-service-head";
import CustomServiceIntro from "./custom-service-intro";
import CustomProjects from "./custom-projects";
import CustomNews from "./custom-news-section";
import CustomInfo from "./custom-info-section";
import CustomOthers from "../custom-others/custom-others";
import CustomPortfolio from "./custom-portfolio";
interface CustomServiceProps {
  head: string;
  image: string;
  label: string;
  Icon: React.ReactNode;
  intro1: string;
  intro2: string;
}
const CustomService: React.FC<CustomServiceProps> = ({
  head,
  image,
  label,
  Icon,
  intro1,
  intro2,
}) => {
  return (
    <Flex className="w-full" flex="1" vertical align="center">
      <CustomServiceHead head={head} image={image} label={label} Icon={Icon} />
      <CustomServiceIntro intro1={intro1} intro2={intro2} />
      <CustomProjects />
      <CustomInfo />
      <CustomOthers />
      <CustomNews />
      <CustomPortfolio />
    </Flex>
  );
};

export default CustomService;
