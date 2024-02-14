import { Flex } from "antd";
import CustomServiceHead from "./custom-service-head";
import CustomServiceIntro from "./custom-service-intro";
import CustomProjects from "./custom-projects";
import CustomNews from "./custom-news-section";
import CustomInfo from "./custom-info-section";
import CustomOthers from "../custom-others/custom-others";
import CustomPortfolio from "./custom-portfolio";
import { CustomPortfolioProps } from "./custom-portfolio/custom-portfolio";
interface CustomServiceProps {
  head: string | undefined;
  image: string | undefined;
  label: string | undefined;
  Icon: React.ReactNode | undefined;
  intro1: string | undefined;
  intro2: string | undefined;
  portfolioData: CustomPortfolioProps | undefined;
  projectData: { name: string; Image: string }[] | undefined;
  leaders:
    | {
        projectName?: string;
        name?: string;
        image: string;
        date?: string;
        desc?: string;
        designations?: string;
        location?: string;
        occupations?: string;
      }[]
    | undefined;
  news:
    | {
        projectName?: string;
        name?: string;
        image: string;
        date?: string;
        desc?: string;
        designations?: string;
        location?: string;
        occupations?: string;
      }[]
    | undefined;
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
  portfolioData,
}) => {
  return (
    <Flex className="w-full" flex="1" vertical align="center">
      {head && image && label && Icon && (
        <CustomServiceHead
          head={head}
          image={image}
          label={label}
          Icon={Icon}
        />
      )}
      {intro1 && intro2 && (
        <CustomServiceIntro intro1={intro1} intro2={intro2} />
      )}
      {projectData && <CustomProjects data={projectData} />}
      {leaders && <CustomInfo data={leaders} />}
      <CustomOthers />
      {news && <CustomNews data={news} />}

      <CustomPortfolio
        desc={portfolioData?.desc}
        label={portfolioData?.label}
        image={portfolioData?.image}
      />
    </Flex>
  );
};

export default CustomService;
