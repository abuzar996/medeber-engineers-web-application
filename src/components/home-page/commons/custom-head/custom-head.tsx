import { Flex, Typography, theme } from "antd";
import { CustomInnerContainer } from "../../types";
interface CustomHeadProps {
  data: CustomInnerContainer;
}
const CustomHead: React.FC<CustomHeadProps> = ({ data }) => {
  const { token } = theme.useToken();
  return (
    <div
      style={{ borderRadius: token.borderRadiusLG }}
      className="w-full h-full select-none bg-gradient-to-r from-blue-500 to-[#1b1247]"
    >
      <Flex
        flex="1"
        style={{ borderRadius: token.borderRadiusLG }}
        className=" h-full xs:max-md:flex-col hover:shadow-[-5px_-2px_10px_5px_#c8bef7] p-[10px]"
      >
        <Flex flex="1" className="h-full">
          <img
            src={data.headImage}
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #efc75e",
              borderRight: "none",
              borderRadius: token.borderRadiusLG,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
        </Flex>
        <Flex flex="1" className="h-full  " vertical>
          <Flex
            style={{
              padding: token.paddingSM,
              border: "1px solid #efc75e",
              borderRadius: token.borderRadiusLG,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <Typography.Text
              style={{ fontSize: token.fontSizeHeading4, color: "#efc75e" }}
            >
              {data.label}
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
              {data.subHeading}
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            className="h-full"
            style={{
              padding: token.paddingSM,
              border: "1px solid #efc75e",
              borderTop: "none",
              borderBottomRightRadius: token.borderRadiusLG,
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
              {data.headDescription}
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default CustomHead;
