import { theme, Flex, Typography } from "antd";

import { servicesData } from "../../utills/data";
import List from "../../commons/custom-card-list";
import { IoMdArrowRoundForward } from "react-icons/io";
const Services = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      vertical
      style={{
        padding: token.paddingXS,
        background:
          "linear-gradient(to bottom,gray 0%,gray 25%,white 30%,white 100%)",
      }}
      className="select-none"
    >
      <Flex
        flex="1"
        style={{ padding: token.paddingSM }}
        className="xs:max-sm:flex-col"
      >
        <Flex flex={1} style={{ padding: token.paddingSM }}>
          <Typography.Text
            style={{ fontSize: token.fontSizeHeading3, textAlign: "center" }}
            className="text-secondary"
          >
            MEDEBER continues to provide high-performance engineering design,
            consulting and energy services.
          </Typography.Text>
        </Flex>
        <Flex
          flex="1"
          style={{ padding: token.paddingSM }}
          className="justify-end xs:max-sm:justify-center"
        >
          <Flex
            style={{ padding: token.paddingSM }}
            gap="middle"
            className="xs:max-sm:justify-center items-end"
          >
            <Flex gap="small" className="xs:max-sm:justify-center items-center">
              <Typography.Text
                style={{ fontSize: token.fontSizeHeading4 }}
                className="hover:underline text-primary"
              >
                Explore our services
              </Typography.Text>
              <IoMdArrowRoundForward size="25" className="text-primary" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flex="1" style={{ padding: token.paddingSM }} justify="center">
        <Flex style={{ width: "90%" }}>
          <List data={servicesData.services} type={true} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Services;
