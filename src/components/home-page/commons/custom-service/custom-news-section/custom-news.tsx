import { Flex, Typography, theme } from "antd";
import CustomSlider from "../../custom-slider";
import CustomInfoCard from "../../custom-info-card";
import Project from "../../../../../assets/Images/news.png";
import { IoMdArrowRoundForward } from "react-icons/io";
const CustomNewsSection = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      className="w-full pb-[130px] pt-[190px]"
      align="center"
      flex={1}
      gap="large"
      style={{
        background: `url(${Project}) no-repeat`,
        backgroundSize: "100%",
      }}
      vertical
    >
      <Flex
        flex="1"
        className="w-[95%]"
        justify="flex-end"
        gap="small"
        align="center"
      >
        <Typography.Text
          style={{
            padding: token.paddingSM,
            fontSize: token.fontSizeHeading4,
            fontWeight: "normal",
            color: "#efc75e",
          }}
          className="select-none hover:underline"
        >
          See All NEWS
        </Typography.Text>
        <IoMdArrowRoundForward size="25" className="fill-secondary" />
      </Flex>

      <CustomSlider type={"news"} Child={CustomInfoCard} />
    </Flex>
  );
};

export default CustomNewsSection;
