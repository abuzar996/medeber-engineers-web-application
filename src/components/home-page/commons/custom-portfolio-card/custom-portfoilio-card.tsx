import { ConfigProvider, Divider, Flex, Typography, theme } from "antd";
import { CustomContainerServices } from "../../types";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useState } from "react";
interface CustomCardProps {
  data: CustomContainerServices;
}
const CustomCard: React.FC<CustomCardProps> = ({ data }) => {
  const [onHover, setOnHover] = useState(false);
  const { token } = theme.useToken();
  return (
    <div className="h-[100%] w-full ">
      <Flex
        gap="small"
        style={{
          borderRadius: token.borderRadiusLG,

          border: "1px solid #efc75e",
          minHeight: "100%",
        }}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className=" text-secondary hover:transition-shadow hover:transition-padding  bg-gradient-to-r from-blue-500 to-[#1b1247]  
        xs:max-sm:flex-col"
      >
        <Flex
          style={{
            border: "1px solid #efc75e",
            borderRadius: token.borderRadiusLG,
            background: `url(${data.serviceImage})`,
            backgroundSize: "cover",
          }}
          justify="center"
          align="center"
          className={`${
            onHover ? "blur-sm" : ""
          } relative min-w-[400px] min-h-[300px] xs:max-sm:max-w-[calc(100vw_-_2px)] xs:max-sm:min-w-[calc(100vw_-_2px)]`}
        >
          <div className="absolute z-50">
            <IoMdArrowRoundForward
              size="30"
              className={`${!onHover ? "invisible" : "visible"}`}
            />
          </div>
        </Flex>

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

          <Flex
            flex="1"
            className="w-full"
            style={{ padding: token.paddingXS }}
          >
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
        </Flex>
      </Flex>
    </div>
  );
};

export default CustomCard;
