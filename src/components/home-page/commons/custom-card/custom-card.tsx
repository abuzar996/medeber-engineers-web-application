import { ConfigProvider, Divider, Flex, Typography, theme } from "antd";
import { CustomContainerServices } from "../../types";
interface CustomCardProps {
  data: CustomContainerServices;
  type: boolean;
}
const CustomCard: React.FC<CustomCardProps> = ({ data, type }) => {
  const { token } = theme.useToken();
  return (
    <div className="h-[100%] w-full ">
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
          src={data.serviceImage}
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
                {data.label}
              </Typography.Title>
            </Flex>
            {!type && (
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
            )}
          </Flex>
          {!type && (
            <Flex flex="1" align="center">
              <Typography.Text
                style={{
                  fontStyle: "italic",
                  color: "#efc75e",
                  fontSize: token.fontSizeHeading5,
                }}
              >
                {data.headDescription}
              </Typography.Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default CustomCard;
