import CustomContainer from "../commons/custom-container";
import { marketData } from "../utills/data";
const Market = () => {
  return (
    <>
      <CustomContainer data={marketData} />
    </>
  );
};

export default Market;
