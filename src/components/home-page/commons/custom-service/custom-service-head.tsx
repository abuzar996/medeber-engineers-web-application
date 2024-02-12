import { Flex, theme } from "antd";

const CustomServiceHead = () => {
  const { token } = theme.useToken();
  return (
    <Flex style={{ padding: token.paddingSM, width: "90%" }}>
      <Flex flex="1">Hello</Flex>
      <Flex flex="1">world</Flex>
    </Flex>
  );
};

export default CustomServiceHead;
