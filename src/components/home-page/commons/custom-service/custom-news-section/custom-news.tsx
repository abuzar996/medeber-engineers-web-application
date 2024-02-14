import { Flex, Typography, theme } from "antd";

import CustomInfoSlider from "../../custon-info-slider";
import Project from "../../../../../assets/Images/news.png";
import { IoMdArrowRoundForward } from "react-icons/io";
interface CustomNewsSectionProps {
  data: {
    projectName?: string;
    name?: string;
    image: string;
    date?: string;
    desc?: string;
    designations?: string;
    location?: string;
    occupations?: string;
  }[];
}
const CustomNewsSection: React.FC<CustomNewsSectionProps> = ({ data }) => {
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

      <CustomInfoSlider type={"news"} data={data} />
    </Flex>
  );
};

export default CustomNewsSection;
