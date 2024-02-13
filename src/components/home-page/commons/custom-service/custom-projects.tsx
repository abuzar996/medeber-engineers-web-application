import { Flex, theme } from "antd";
import CustomSlider from "../custom-slider";

const CustomProjects = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      className="w-full"
      justify="center"
      flex={1}
      style={{
        padding: token.paddingSM,
        background:
          "linear-gradient(to bottom,gray 0%,gray 90%,white 95%,white 100%)",
      }}
    >
      <CustomSlider />
    </Flex>
  );
};

export default CustomProjects;
