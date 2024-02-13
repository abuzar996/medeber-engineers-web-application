import { Flex } from "antd";
import { CustomContainerServices } from "../../types";
import CustomCard from "../custom-card";
interface CustomCardProps {
  data: CustomContainerServices[];
  type: boolean;
}
const List: React.FC<CustomCardProps> = ({ data, type }) => {
  return (
    <Flex
      flex="1"
      className="w-[90%] flex-wrap"
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
