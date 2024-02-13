import CustomSlider from "../../commons/custom-slider";
import CustomProjectCard from "../../commons/custom-project-card";
import { Flex, Typography, theme } from "antd";
const Testimonial = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      align="center"
      vertical
      className="pb-[100px] pt-[100px] shadow-[0px_-2px_10px_5px_gray]"
      gap="large"
      style={{
        background:
          "linear-gradient(to bottom,gray 0%,gray 40%,white 50%,white 100%)",
      }}
    >
      <Flex justify="center">
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading1,
            fontStyle: "italic",
            color: "#12174b",
          }}
        >
          Testimonials
        </Typography.Text>
      </Flex>
      <Flex style={{ width: "60%" }} justify="center">
        <Typography.Text
          style={{
            textWrap: "wrap",
            fontSize: token.fontSizeHeading1,
            textAlign: "center",
            color: "#efc75e",
          }}
        >
          We’re proud of the fact that some of the brightest minds in the
          industry call <span className="text-primary">MEDEBER</span> home.
        </Typography.Text>
      </Flex>
      <CustomSlider type={true} Child={CustomProjectCard} />
    </Flex>
  );
};

export default Testimonial;
