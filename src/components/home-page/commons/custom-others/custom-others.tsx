import { Flex, Typography, theme } from "antd";
//import Img1 from "../../../../assets/Images/services/electrical.png";
const CustomOthers = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      className="w-full min-h-[300px] xs:max-sm:flex-col"
      flex="1"
      style={{
        border: "2px solid #efce75",
        backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
      }}
    >
      <Flex
        flex="1"
        justify="center"
        align="center"
        style={{
          padding: token.paddingSM,
          borderRight: "2px solid #efce75",
        }}
      >
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading2,
            fontStyle: "italic",
            fontWeight: "lighter",
            color: "#efc75e",
          }}
        >
          Our Other Services
        </Typography.Text>
      </Flex>
      <Flex
        flex="3"
        style={{ flexWrap: "wrap" }}
        className="xs:max-md:flex-col"
      >
        <Flex flex="1" vertical>
          <Flex
            flex={1}
            justify="center"
            align="center"
            style={{ border: "1px solid #efc75e" }}
            className={`  text-[#efc75e] hover:text-white bg-transparent `}
          >
            <Typography.Text
              style={{
                fontWeight: token.fontWeightStrong,
                fontSize: token.fontSizeHeading4,
                color: "inherit",
              }}
            >
              Electrical Enginering
            </Typography.Text>
          </Flex>
          <Flex
            flex={1}
            justify="center"
            align="center"
            style={{ border: "1px solid #efc75e" }}
            className={`  text-[#efc75e] hover:text-white bg-transparent `}
          >
            <Typography.Text
              style={{
                fontWeight: token.fontWeightStrong,
                fontSize: token.fontSizeHeading4,
                color: "inherit",
              }}
            >
              Mechanical Enginering
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex flex="1" vertical>
          <Flex
            flex={1}
            justify="center"
            align="center"
            style={{ border: "1px solid #efc75e" }}
            className={`  text-[#efc75e] hover:text-white bg-transparent `}
          >
            <Typography.Text
              style={{
                fontWeight: token.fontWeightStrong,
                fontSize: token.fontSizeHeading4,
                color: "inherit",
              }}
            >
              Software Development
            </Typography.Text>
          </Flex>
          <Flex
            flex={1}
            justify="center"
            align="center"
            style={{ border: "1px solid #efc75e" }}
            className={`  text-[#efc75e] hover:text-white bg-transparent `}
          >
            <Typography.Text
              style={{
                fontWeight: token.fontWeightStrong,
                fontSize: token.fontSizeHeading4,
                color: "inherit",
              }}
            >
              Energy Services
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex flex="1" vertical>
          <Flex
            flex={1}
            justify="center"
            align="center"
            style={{ border: "1px solid #efc75e" }}
            className={`  text-[#efc75e] hover:text-white bg-transparent `}
          >
            <Typography.Text
              style={{
                fontWeight: token.fontWeightStrong,
                fontSize: token.fontSizeHeading4,
                color: "inherit",
              }}
            >
              Technology
            </Typography.Text>
          </Flex>
          <Flex
            flex={1}
            justify="center"
            align="center"
            style={{ border: "1px solid #efc75e" }}
            className={`  text-[#efc75e] hover:text-white bg-transparent `}
          >
            <Typography.Text
              style={{
                fontWeight: token.fontWeightStrong,
                fontSize: token.fontSizeHeading4,
                color: "inherit",
              }}
            >
              Manufacturing
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomOthers;
