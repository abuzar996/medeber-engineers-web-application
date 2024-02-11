import { Flex, theme, Typography, Divider, ConfigProvider } from "antd";
import { items } from "../../utills/data";

import { DefaultOptionType } from "antd/es/select";
import Logo from "../../../../assets/Images/medeber.png";
import { CiInstagram, CiFacebook, CiYoutube, CiTwitter } from "react-icons/ci";
import { LuCopyright } from "react-icons/lu";

import { FIRMNAME } from "../../types";
const color1 = "#1b1247";
const Footer = () => {
  const { token } = theme.useToken();
  const footerItems = items as DefaultOptionType[];
  return (
    <Flex
      flex="1"
      vertical
      className="bg-gradient-to-r from-blue-500 to-[#1b1247] xs:max-md:items-center"
    >
      <Flex
        flex="1"
        style={{
          padding: token.paddingSM,
        }}
        align="center"
        vertical
      >
        <Flex className="w-[90%] xs:max-md:w-full" vertical>
          <Flex flex={1} vertical>
            <Flex align="center" gap="middle">
              <img
                src={Logo}
                style={{ width: "40px", height: "40px", borderRadius: "20px" }}
              />

              <Typography.Text
                style={{
                  color: color1,
                  fontWeight: token.fontWeightStrong,
                  fontSize: token.fontSizeHeading5,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {FIRMNAME.NAME}
              </Typography.Text>
            </Flex>
          </Flex>
          <Flex
            flex="1"
            justify="center"
            style={{ padding: token.paddingLG }}
            className="xs:max-md:flex-col xs:max-md:items-start xs:max-md:gap-4"
          >
            {items &&
              footerItems.map((item) => (
                <Flex
                  key={item.key}
                  justify="space-around"
                  gap="middle"
                  flex="1"
                  className="xs:max-md:w-full"
                >
                  <Flex vertical gap="small" className="xs:max-md:w-full">
                    <Flex
                      align="center"
                      gap="small"
                      className="xs:max-md:justify-center xs:max-md:w-full"
                    >
                      {item.icon}
                      <Typography.Text
                        style={{
                          fontSize: token.fontSizeHeading5,
                          fontWeight: token.fontWeightStrong,
                        }}
                        className="underline cursor-pointer"
                      >
                        {item.label}
                      </Typography.Text>
                    </Flex>
                    <Flex vertical>
                      {item.children ? (
                        item.children?.map((child) => (
                          <Flex
                            key={child.key}
                            justify="flex-start"
                            className="cursor-pointer hover:underline py-[2px] hover:text-[white]"
                            gap="small"
                          >
                            <div>{child.icon}</div>
                            <Typography
                              className="hover:text-[#fff]"
                              style={{
                                fontSize: token.fontSizeSM,
                              }}
                            >
                              {child.label}
                            </Typography>
                          </Flex>
                        ))
                      ) : (
                        <Flex
                          align="center"
                          justify="center"
                          flex="1"
                          gap="middle"
                        >
                          <CiInstagram
                            className="hover:fill-[blue]"
                            size="22"
                          />
                          <CiFacebook className="hover:fill-[blue]" size="22" />
                          <CiYoutube className="hover:fill-[blue]" size="22" />
                          <CiTwitter className="hover:fill-[blue]" size="22" />
                        </Flex>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
              ))}
          </Flex>
        </Flex>
      </Flex>
      <ConfigProvider
        theme={{
          components: {
            Divider: {
              margin: 0,
              marginLG: 0,
            },
          },
        }}
      >
        <Divider style={{ padding: 0 }} />
      </ConfigProvider>
      <Flex flex="1" justify="center">
        <Flex className="w-[90%] xs:max-md:w-full" justify="center">
          <Flex
            gap="middle"
            style={{ padding: token.paddingSM }}
            align="center"
            justify="center"
          >
            <LuCopyright className="text-[gray]" />
            <Typography.Text className="text-[gray]">
              2024 All Rights Reserved
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
