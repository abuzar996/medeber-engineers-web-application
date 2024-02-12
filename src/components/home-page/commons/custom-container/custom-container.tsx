import { Flex, Typography, theme } from "antd";
import Image from "../../../../assets/Images/main5.png";
import CustomHead from "../custom-head";
import CustomCard from "../custom-card";
const CustomContainer = () => {
  const { token } = theme.useToken();
  return (
    <div
      className=" w-full"
      style={{
        backgroundImage: `url(${Image})`,
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
            Markets
          </Typography.Title>
          <Typography.Text
            style={{
              fontSize: token.fontSizeHeading3,
              color: "#1b1247",
              fontWeight: token.fontWeightStrong,
            }}
          >
            We've got experience in a vide variety of{" "}
            <span style={{ color: "#1b1247" }}>industries.</span>
          </Typography.Text>
        </Flex>

        <Flex flex="1" className="w-[90%]" justify="center">
          <Flex flex={1} className="md:max-h-[550px] w-[100%]" justify="center">
            <CustomHead />
          </Flex>
        </Flex>
        <Flex
          flex="1"
          className="w-[90%] flex-wrap"
          gap="large"
          justify="space-between"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <Flex className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]">
            <CustomCard />
          </Flex>
          <Flex className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]">
            <CustomCard />
          </Flex>
          <Flex className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]">
            <CustomCard />
          </Flex>
          <Flex className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]">
            <CustomCard />
          </Flex>
          <Flex className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]">
            <CustomCard />
          </Flex>
          <Flex className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]">
            <CustomCard />
          </Flex>
          <Flex className="basis-[30%] xs:max-sm:basis-[100%] sm:max-md:basis-[45%]">
            <CustomCard />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
export default CustomContainer;
