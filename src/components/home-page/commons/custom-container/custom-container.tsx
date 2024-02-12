import { Flex, Typography, theme } from "antd";
import { CustomContainer } from "../../types";
import CustomHead from "../custom-head";
import CustomCard from "../custom-card";
interface CustomContainerProps {
  data: CustomContainer;
}
const CustomContainers: React.FC<CustomContainerProps> = ({ data }) => {
  const { token } = theme.useToken();
  return (
    <div
      className=" w-full"
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "100% 450px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Flex vertical flex={1} align="center">
        <Flex
          flex="1"
          className="w-[90%]"
          gap="large"
          style={{
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
          vertical
        >
          <Typography.Title
            style={{
              color: "#fff",
              fontWeight: token.fontWeightStrong,
            }}
          >
            {data.mainLabel}
          </Typography.Title>
          <Typography.Text
            style={{
              fontSize: token.fontSizeHeading3,
              color: "#1b1247",
              fontWeight: token.fontWeightStrong,
            }}
          >
            {data.description}
          </Typography.Text>
        </Flex>

        <Flex flex="1" className="w-[90%]" justify="center">
          <Flex flex={1} className="md:max-h-[550px] w-[100%]" justify="center">
            <CustomHead data={data.headData} />
          </Flex>
        </Flex>
        <Flex
          flex="1"
          className="w-[90%] flex-wrap"
          gap="large"
          justify="space-between"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          {data.services.map((service) => (
            <Flex
              key={service.id}
              className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]"
            >
              <CustomCard data={service} type={true} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};
export default CustomContainers;
