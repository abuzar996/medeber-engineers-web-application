import CustomService from "../commons/custom-service/custom-service";
import { useParams } from "react-router-dom";
import { services } from "../utills/data";
import { useEffect, useState } from "react";
import { DefaultOptionType } from "antd/es/select";
import { CustomServiceHeadProps } from "../commons/custom-service/custom-service-head";
import { CustomServiceIntroProps } from "../commons/custom-service/custom-service-intro";
const StructuralEngineering = () => {
  const { childRoute } = useParams();
  const [service, setData] = useState<CustomServiceHeadProps>();
  const [intro, setIntro] = useState<CustomServiceIntroProps>();
  useEffect(() => {
    if (childRoute) {
      const data = services.items.find(
        (data: DefaultOptionType) => data.routes === childRoute
      );
      setData(data.data);
      setIntro(data.intro);
    }
  }, [childRoute]);

  return (
    <>
      {service && intro && (
        <CustomService
          head={service.head}
          image={service.image}
          Icon={service.Icon}
          label={service.label}
          intro1={intro.intro1}
          intro2={intro.intro2}
        />
      )}
    </>
  );
};

export default StructuralEngineering;
