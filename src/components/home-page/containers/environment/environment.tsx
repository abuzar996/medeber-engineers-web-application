import { Button, Flex, Typography, theme } from "antd";
import Company from "../../../../assets/Images/company.png";
import { IoMdArrowRoundForward } from "react-icons/io";
const Environment = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      className=" pb-[100px] pt-[100px] shadow-[0px_-2px_10px_5px_gray] xs:max-md:flex-col"
      style={{
        background:
          "linear-gradient(to bottom,gray 0%,gray 40%,white 50%,white 100%)",
      }}
    >
      <Flex flex="1" className="select-none">
        <img
          src={Company}
          style={{ width: "100%", padding: token.paddingSM }}
        />
      </Flex>
      <Flex
        flex="1"
        vertical
        style={{ padding: token.paddingSM }}
        align="center"
      >
        <Flex
          flex="1"
          style={{ padding: token.paddingSM, width: "80%" }}
          justify="center"
          className="select-none"
        >
          <Typography.Text
            style={{
              textAlign: "center",
              fontWeight: token.fontWeightStrong,
              fontSize: token.fontSizeHeading3,
              color: "#121b47",
            }}
          >
            We work hard on delivering great projects, and we also have fun.
            Explore careers and internships with TLC.
          </Typography.Text>
        </Flex>
        <Flex
          flex="1"
          style={{ padding: token.paddingSM, width: "80%" }}
          justify="center"
          className="select-none"
        >
          <Typography.Text
            style={{
              textAlign: "left",
              //fontWeight: token.fontWeightStrong,
              fontSize: token.fontSizeHeading4,
              color: "#121b47",
            }}
          >
            From our highly competitive annual firm-wide softball tournament to
            our regional chili cook-offs, TLCers build long-term relationships.
          </Typography.Text>
        </Flex>
        <Flex justify="space-around" className="w-[100%]">
          <Button size="large" className="bg-primary" type="primary">
            <Flex flex="1" gap="small" align="center">
              <Typography.Text
                style={{ fontSize: token.fontSizeHeading5 }}
                className="text-secondary"
              >
                Careers
              </Typography.Text>
              <IoMdArrowRoundForward size="20" className="fill-secondary" />
            </Flex>
          </Button>
          <Button
            size="large"
            className="bg-primary hover:bg-primary"
            type="primary"
          >
            <Flex flex="1" gap="small" align="center">
              <Typography.Text
                style={{ fontSize: token.fontSizeHeading5 }}
                className="text-secondary"
              >
                Culture
              </Typography.Text>
              <IoMdArrowRoundForward size="20" className="fill-secondary" />
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Environment;
