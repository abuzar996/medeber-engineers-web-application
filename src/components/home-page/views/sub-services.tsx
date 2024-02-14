import CustomService from "../commons/custom-service/custom-service";
import { useParams } from "react-router-dom";
import { services } from "../utills/data";
import { useEffect, useState } from "react";
import { DefaultOptionType } from "antd/es/select";
import { CustomPortfolioProps } from "../commons/custom-service/custom-portfolio/custom-portfolio";
import { CustomServiceHeadProps } from "../commons/custom-service/custom-service-head";
import { CustomServiceIntroProps } from "../commons/custom-service/custom-service-intro";
const StructuralEngineering = () => {
  const { childRoute } = useParams();
  const [service, setData] = useState<CustomServiceHeadProps>();
  const [intro, setIntro] = useState<CustomServiceIntroProps>();
  const [projects, setProjects] = useState<{ name: string; Image: string }[]>();
  const [portfoilio, setPortfolio] = useState<CustomPortfolioProps>();
  const [leaders, setLeaders] = useState<
    {
      projectName?: string;
      name?: string;
      image: string;
      date?: string;
      desc?: string;
      designations?: string;
      location?: string;
      occupations?: string;
    }[]
  >();
  const [news, setNews] = useState<
    {
      projectName?: string;
      name?: string;
      image: string;
      date?: string;
      desc?: string;
      designations?: string;
      location?: string;
      occupations?: string;
    }[]
  >();
  useEffect(() => {
    if (childRoute) {
      const data = services.items.find(
        (data: DefaultOptionType) => data.routes === childRoute
      );
      setData(data.data);
      setIntro(data.intro);
      setProjects(data.projects);
      setLeaders(data.leaders);
      setNews(data.news);
      setPortfolio(data.portfolio);
    }
  }, [childRoute]);

  return (
    <>
      <CustomService
        head={service?.head || undefined}
        image={service?.image || undefined}
        Icon={service?.Icon || undefined}
        label={service?.label || undefined}
        intro1={intro?.intro1 || undefined}
        intro2={intro?.intro2 || undefined}
        projectData={projects || undefined}
        leaders={leaders || undefined}
        news={news || undefined}
        portfolioData={portfoilio || undefined}
      />
    </>
  );
};

export default StructuralEngineering;
