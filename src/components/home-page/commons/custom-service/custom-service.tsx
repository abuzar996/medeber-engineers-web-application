import { Flex } from "antd";
import CustomServiceHead from "./custom-service-head";
import CustomServiceIntro from "./custom-service-intro";
import CustomProjects from "./custom-projects";
import CustomNews from "./custom-news-section";
import CustomInfo from "./custom-info-section";
// import CustomOthers from "../custom-others/custom-others";
import CustomPortfolio from "./custom-portfolio";
interface CustomServiceProps {
  head: string;
  image: string;
  label: string;
  Icon: React.ReactNode;
  intro1: string;
  intro2: string;
  projectData: { name: string; Image: string }[];
  leaders: {
    projectName?: string;
    name?: string;
    image: string;
    date?: string;
    desc?: string;
    designations?: string;
    location?: string;
    occupations?: string;
  }[];
  news: {
    projectName?: string;
    name?: string;
    image: string;
    date?: string;
    desc?: string;
    designations?: string;
    location?: string;
    occupations?: string;
  }[];
}
const CustomService: React.FC<CustomServiceProps> = ({
  head,
  image,
  label,
  Icon,
  intro1,
  intro2,
  projectData,
  leaders,
  news,
}) => {
  return (
    <Flex className="w-full" flex="1" vertical align="center">
      <CustomServiceHead head={head} image={image} label={label} Icon={Icon} />
      <CustomServiceIntro intro1={intro1} intro2={intro2} />
      <CustomProjects data={projectData} />
      <CustomInfo data={leaders} />
      <CustomNews data={news} />
      {/*<CustomOthers />
       */}
      <CustomPortfolio />
    </Flex>
  );
};

export default CustomService;
