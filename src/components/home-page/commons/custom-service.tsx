import { Flex, theme } from "antd";
const CustomService = () => {
  const { token } = theme.useToken();
  return <Flex style={{ padding: token.paddingSM }}>CustomService</Flex>;
};

export default CustomService;
