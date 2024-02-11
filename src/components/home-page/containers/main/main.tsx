import { Button, Carousel, Flex, Typography, theme } from "antd";
import Main from "../../../../assets/Images/main.png";
import Main1 from "../../../../assets/Images/main8.png";
import Main2 from "../../../../assets/Images/corporate9.png";
import "../../layout/scroll.css";

const MainView = () => {
  const { token } = theme.useToken();
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

  return (
    <Carousel autoplay autoplaySpeed={2000} effect="fade" dots={false}>
      <Flex flex="1" vertical gap="large">
        <h1 style={contentStyle}>
          <Flex>
            <span className="text-[#1b1247] text-4xl">MEDEBER </span>{" "}
            <span className="text-[#efc75e] ml-[10px] text-4xl">
              ENGINEERS.
            </span>
          </Flex>
          <Flex gap="middle">
            <Button
              style={{
                backgroundColor: "#efc75e",

                borderColor: "#efc75e",
              }}
              size="large"
            >
              <Typography.Text
                style={{ color: "#121b47", fontWeight: token.fontWeightStrong }}
              >
                Careers
              </Typography.Text>
            </Button>
            <Button
              style={{
                backgroundColor: "#121b47",

                borderColor: "#121b47",
              }}
              size="large"
            >
              <Typography.Text
                style={{ color: "#efc75e", fontWeight: token.fontWeightStrong }}
              >
                Contact Us
              </Typography.Text>
            </Button>
          </Flex>
        </h1>
      </Flex>
      <Flex flex="1" vertical gap="middle">
        <h1 style={contentStyle2}>
          <Flex>
            <span className="text-[#1b1247] text-4xl">MEDEBER </span>{" "}
            <span className="text-[#efc75e] ml-[10px] text-4xl">
              ENGINEERS.
            </span>
          </Flex>
          <Flex gap="large">
            <Button
              style={{
                backgroundColor: "#efc75e",
                borderColor: "#efc75e",
              }}
              size="large"
            >
              <Typography.Text
                style={{ color: "#121b47", fontWeight: token.fontWeightStrong }}
              >
                Careers
              </Typography.Text>
            </Button>
            <Button
              style={{
                backgroundColor: "#121b47",
                borderColor: "#121b47",
              }}
              size="large"
            >
              <Typography.Text
                style={{ color: "#efc75e", fontWeight: token.fontWeightStrong }}
              >
                Contact Us
              </Typography.Text>
            </Button>
          </Flex>
        </h1>
      </Flex>
      <Flex flex="1" vertical gap="large">
        <h1 style={contentStyle3}>
          <Flex>
            <span className="text-[#ffff] text-4xl">MEDEBER </span>{" "}
            <span className="text-[#efc75e] ml-[10px] text-4xl">
              ENGINEERS.
            </span>
          </Flex>
          <Flex gap="middle">
            <Button
              style={{
                backgroundColor: "#efc75e",
                borderColor: "#efc75e",
              }}
              size="large"
            >
              <Typography.Text
                style={{ color: "#121b47", fontWeight: token.fontWeightStrong }}
              >
                Careers
              </Typography.Text>
            </Button>
            <Button
              style={{
                backgroundColor: "#121b47",
                borderColor: "#121b47",
              }}
              size="large"
            >
              <Typography.Text
                style={{
                  color: "#efc75e",
                  fontWeight: token.fontWeightStrong,
                }}
              >
                Contact Us
              </Typography.Text>
            </Button>
          </Flex>
        </h1>
      </Flex>
    </Carousel>
  );
};

export default MainView;
