import { Flex, Typography, theme } from "antd";
import Image from "../../../../assets/Images/main4.png";
const CustomHead = () => {
  const { token } = theme.useToken();
  return (
    <div className="w-full h-full select-none bg-gradient-to-r from-blue-500 to-[#1b1247]">
      <Flex
        flex="1"
        className=" h-full xs:max-md:flex-col hover:shadow-[-5px_-2px_10px_5px_#c8bef7] p-[10px] hover:p-[15px]"
      >
        <Flex flex="1" className="h-full">
          <img
            src={Image}
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #efc75e",
              borderRight: "none",
            }}
          />
        </Flex>
        <Flex flex="1" className="h-full  " vertical>
          <Flex
            style={{ padding: token.paddingSM, border: "1px solid #efc75e" }}
          >
            <Typography.Text
              style={{ fontSize: token.fontSizeHeading4, color: "#efc75e" }}
            >
              Featured Expertise
            </Typography.Text>
          </Flex>
          <Flex
            style={{
              padding: token.paddingSM,
              border: "1px solid #efc75e",
              borderTop: "none",
            }}
          >
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading2,
                fontWeight: token.fontWeightStrong,
                textAlign: "start",
                textWrap: "wrap",
                color: "#efc75e",
              }}
            >
              Electrical, Mechanical and Structural designs all are available
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            style={{
              padding: token.paddingSM,
              border: "1px solid #efc75e",
              borderTop: "none",
            }}
          >
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading4,
                fontWeight: "revert",
                fontStyle: "italic",
                textAlign: "start",
                textWrap: "wrap",
                color: "#efc75e",
              }}
            >
              Terminals operate 24/7, requiring building systems that provide
              for travel confort and security, while also striving for
              sustainability.
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default CustomHead;
