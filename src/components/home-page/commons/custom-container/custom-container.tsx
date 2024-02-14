import { Flex, Typography, theme } from "antd";
import { CustomContainer } from "../../types";
import List from "../custom-card-list";
import CustomHead from "../custom-head";

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
              color: "#efc75e",
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
        <List data={data.services} type={false} />
      </Flex>
    </div>
  );
};
export default CustomContainers;
