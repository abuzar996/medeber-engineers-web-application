import { Flex } from "antd";
import { CustomContainerServices } from "../../types";
import CustomCard from "../custom-card";
//import { useNavigate } from "react-router-dom";
interface CustomCardProps {
  data: CustomContainerServices[];
  type: boolean;
}
const List: React.FC<CustomCardProps> = ({ data, type }) => {
  //const navigate = useNavigate();
  return (
    <Flex
      flex="1"
      className="w-[90%] flex-wrap select-none"
      gap="large"
      justify="space-between"
      style={{ paddingTop: "50px", paddingBottom: "50px" }}
    >
      {data.map((service) => (
        <Flex
          key={service.id}
          className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]"
        >
          <CustomCard data={service} type={type} />
        </Flex>
      ))}
    </Flex>
  );
};
export default List;
