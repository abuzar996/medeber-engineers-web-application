import { Flex, Typography, theme, Divider, ConfigProvider } from "antd";
import { VscSymbolStructure } from "react-icons/vsc";
import Structure from "../../../../assets/Images/services/structural.png";
const CustomServiceHead = () => {
  const { token } = theme.useToken();
  return (
    <Flex className="select-none xs:max-sm:flex-col-reverse h-full w-[90%] xs:max-sm:w-[100%] xs:max-sm:p-0 p-[10px]">
      <Flex vertical flex={1}>
        <Flex flex="1" vertical>
          <Flex
            flex="1"
            style={{ padding: token.paddingXS }}
            align="flex-end"
            className="xs:max-sm:justify-center"
          >
            <Typography.Text
              style={{
                fontWeight: token.fontWeightStrong,
                color: "gray",
                fontSize: token.fontSizeHeading5,
              }}
            >
              SERVICE
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            gap="small"
            style={{ padding: token.paddingXS }}
            align="center"
            className="xs:max-sm:justify-center xs:max-sm:flex-col"
          >
            <div
              style={{
                border: "1px solid gray",
                padding: token.paddingXS,
                borderRadius: "50%",
              }}
            >
              <VscSymbolStructure size="25" />
            </div>
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading3,
                fontWeight: token.fontWeightStrong,
              }}
              className="xs:max-sm:text-center"
            >
              Structural Engineering
            </Typography.Text>
          </Flex>
          <ConfigProvider
            theme={{
              components: { Divider: { marginLG: 0, colorSplit: "#000" } },
            }}
          >
            <Divider style={{ color: "#000" }} />
          </ConfigProvider>
        </Flex>
        <Flex className="py-[30px] xs:max-sm:justify-center">
          <Typography.Title
            style={{ fontStyle: "italic" }}
            className="xs:max-sm:text-center"
          >
            Engineering Stability
          </Typography.Title>
        </Flex>
      </Flex>
      <Flex flex="1" className="p-[5px] xs:max-sm:p-[0]">
        <img src={Structure} className="h-[300px] w-full" />
      </Flex>
    </Flex>
  );
};

export default CustomServiceHead;
