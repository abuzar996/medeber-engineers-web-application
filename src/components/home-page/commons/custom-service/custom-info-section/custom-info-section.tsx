import { Flex, Typography, theme } from "antd";

//import CustomSlider from "../../custom-slider";
//import CustomInfoCard from "../../custom-info-card";
import CustomInfoSlider from "../../custon-info-slider";
interface CustomInfoSectionProps {
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
const CustomInfoSection: React.FC<CustomInfoSectionProps> = ({ data }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      className="w-full"
      align="center"
      flex={1}
      gap="large"
      style={{
        padding: token.paddingSM,
        paddingTop: "190px",
        paddingBottom: "130px",
        background:
          "linear-gradient(to bottom,gray 0%,gray 20%,white 50%,white 80%,grey 90%,gray 100%)",
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
      <CustomInfoSlider type="info" data={data} />
    </Flex>
  );
};

export default CustomInfoSection;
