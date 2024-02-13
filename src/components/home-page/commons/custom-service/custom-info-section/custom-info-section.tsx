import { Flex, Typography, theme } from "antd";

import CustomSlider from "../../custom-slider";
import CustomInfoCard from "../../custom-info-card";

const CustomInfoSection = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      className="w-full pb-[130px] pt-[190px]"
      align="center"
      flex={1}
      gap="large"
      style={{
        background:
          "linear-gradient(to bottom,white 0%,white 20%,white 50%,white 80%,grey 90%,gray 100%)",
      }}
      vertical
    >
      <Flex
        flex="1"
        className="w-[95%]"
        justify="center"
        gap="small"
        align="center"
      >
        <Typography.Text
          style={{
            padding: token.paddingSM,
            fontSize: token.fontSizeHeading1,

            fontWeight: token.fontWeightStrong,
            color: "#121b47",
          }}
          className="select-none "
        >
          Our Energy Services Leadership
        </Typography.Text>
      </Flex>

      <CustomSlider type={"info"} Child={CustomInfoCard} />
    </Flex>
  );
};

export default CustomInfoSection;
