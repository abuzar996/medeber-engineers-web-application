import { ConfigProvider, Divider, Flex, Typography, theme } from "antd";
import Image1 from "../../../../assets/Images/corporate9.png";
const CustomCard = () => {
  const { token } = theme.useToken();
  return (
    <div className="h-[100%] ">
      <Flex
        gap="small"
        vertical
        style={{
          borderRadius: token.borderRadiusLG,

          border: "1px solid #efc75e",
          minHeight: "100%",
        }}
        className=" text-secondary hover:transition-shadow hover:transition-padding  bg-gradient-to-r from-blue-500 to-[#1b1247] hover:shadow-[-5px_-2px_10px_5px_#c8bef7] p-[10px] "
      >
        <img
          src={Image1}
          style={{
            height: "200px",
            border: "1px solid #efc75e",
            borderRadius: token.borderRadiusLG,
          }}
        />
        <Flex flex="1" align="center" vertical gap="small">
          <Flex vertical className="w-[100%]">
            <Flex
              flex="1"
              justify="flex-start"
              style={{ padding: token.paddingXS }}
            >
              <Typography.Title
                style={{
                  color: "#efc75e",
                  fontSize: token.fontSizeHeading3,
                }}
              >
                Hello world
              </Typography.Title>
            </Flex>
            <ConfigProvider
              theme={{
                components: {
                  Divider: {
                    marginLG: 0,
                    colorSplit: "#efc75e",
                  },
                },
              }}
            >
              <Divider />
            </ConfigProvider>
          </Flex>
          <Flex flex="1" align="center">
            <Typography.Text
              style={{
                fontStyle: "italic",
                color: "#efc75e",
                fontSize: token.fontSizeHeading5,
              }}
            >
              Our goal is to maximize efficiency while ensuring redundency in
              the high complex facilities
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default CustomCard;
