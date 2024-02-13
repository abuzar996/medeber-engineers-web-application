import { Flex, theme, Typography } from "antd";
import Market from "../../../../assets/Images/main5.png";
import Expert from "../../../../assets/Images/expertise.png";
import { IoMdArrowRoundForward } from "react-icons/io";
const Experties = () => {
  const { token } = theme.useToken();

  return (
    <Flex
      flex="1"
      className=" pb-[100px] pt-[50px]"
      style={{
        background:
          "linear-gradient(to bottom,gray 0%,gray 40%,white 50%,white 100%)",
      }}
      vertical
      align="center"
    >
      <Flex
        flex="1"
        style={{ padding: token.paddingSM, width: "80%" }}
        justify="center"
      >
        <Typography.Text
          style={{
            textAlign: "center",
            fontWeight: token.fontWeightStrong,
            fontSize: token.fontSizeHeading2,
            color: "#121b47",
          }}
        >
          Choose the experts you need to deliver the results you want.
        </Typography.Text>
      </Flex>
      <Flex flex="1" className="w-full xs:max-sm:flex-col" gap="middle">
        <Flex
          className="w-[40%] xs:max-sm:w-[100%] select-none "
          style={{ padding: token.paddingSM }}
          vertical
        >
          <Flex
            style={{
              paddingTop: token.paddingSM,
              paddingBottom: token.paddingSM,
            }}
            gap="small"
            justify="flex-start"
            align="center"
          >
            <Typography.Text
              className="text-secondary hover:underline"
              style={{ fontSize: token.fontSizeHeading4 }}
            >
              Visit Our Markets
            </Typography.Text>
            <IoMdArrowRoundForward className="fill-secondary" size="20" />
          </Flex>
          <img src={Market} style={{ width: "100%", height: "300px" }} />
        </Flex>
        <Flex
          className="w-[60%] xs:max-sm:w-[100%] select-none "
          style={{ padding: token.paddingSM }}
          vertical
        >
          <img src={Expert} style={{ width: "100%", height: "300px" }} />
          <Flex
            style={{
              paddingTop: token.paddingSM,
              paddingBottom: token.paddingSM,
            }}
            gap="small"
            justify="flex-end"
            align="center"
          >
            <Typography.Text
              className="text-primary hover:underline"
              style={{ fontSize: token.fontSizeHeading4 }}
            >
              See Our Expertise
            </Typography.Text>
            <IoMdArrowRoundForward className="fill-primary " size="20" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Experties;
