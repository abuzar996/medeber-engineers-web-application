import { Button, Carousel, Flex, Typography, theme } from "antd";
import Main from "../../../../assets/Images/img2.png";
import Main1 from "../../../../assets/Images/img3.png";
import Main2 from "../../../../assets/Images/img1.png";
import "../../layout/scroll.css";
const contentStyle: React.CSSProperties = {
  height: "calc(100vh - 55px)",
  width: "100vw",
  fontWeight: "bold",
  backgroundImage: `url(${Main})`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const contentStyle2: React.CSSProperties = {
  height: "calc(100vh - 55px)",
  width: "100vw",
  display: "flex",
  flexDirection: "column",

  fontWeight: "bold",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${Main1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const contentStyle3: React.CSSProperties = {
  height: "calc(100vh - 55px)",

  fontWeight: "bold",
  display: "flex",
  width: "100vw",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${Main2})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

interface TextAreaProps {
  styles: React.CSSProperties;
}
const TextArea: React.FC<TextAreaProps> = ({ styles }) => {
  const { token } = theme.useToken();
  return (
    <h1 style={styles}>
      <Flex>
        <span className="text-[#fff] text-4xl">MEDEBER </span>{" "}
        <span className="text-[#efc75e] ml-[10px] text-4xl">ENGINEERS.</span>
      </Flex>
      <Flex gap="middle" vertical>
        <Flex flex="1" justify="center">
          <Typography.Title
            style={{
              fontWeight: "lighter",
              color: "#fff",
            }}
          >
            Your<span className="text-secondary"> Engineering </span> solution
            Partner
          </Typography.Title>
        </Flex>
        <Flex flex="1" justify="center">
          <Flex style={{ width: "50%" }}>
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading3,
                fontWeight: "lighter",
                color: "#fff",
                textAlign: "center",
              }}
            >
              We provide{" "}
              <span className="text-secondary">
                high-performance engineering{" "}
              </span>
              design, <span className="text-white">consulting</span>,and
              development services{" "}
              <span className="text-secondary">across various sectors</span>
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex justify="center">
          <Button
            style={{
              backgroundColor: "#efc75e",
              borderColor: "#efc75e",
            }}
            size="large"
          >
            <Typography.Text
              style={{
                color: "#121b47",
                fontWeight: token.fontWeightStrong,
              }}
            >
              Contact Us
            </Typography.Text>
          </Button>
        </Flex>
      </Flex>
    </h1>
  );
};

const MainView = () => {
  return (
    <Carousel autoplay autoplaySpeed={2000} effect="fade" dots={false}>
      <Flex flex="1" vertical gap="large">
        <TextArea styles={contentStyle} />
      </Flex>
      <Flex flex="1" vertical gap="middle">
        <TextArea styles={contentStyle2} />
      </Flex>
      <Flex flex="1" vertical gap="large">
        <TextArea styles={contentStyle3} />
      </Flex>
    </Carousel>
  );
};

export default MainView;
