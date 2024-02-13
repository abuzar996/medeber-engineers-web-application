import { Flex, Typography, theme } from "antd";

const CustomServiceIntro = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      style={{
        padding: token.paddingSM,
        width: "90%",
      }}
      className="select-none xs:max-sm:flex-col "
    >
      <Flex flex="1" className="xs:max-sm:justify-center">
        <div className="w-[90%]">
          <Typography.Text
            style={{ fontSize: token.fontSizeHeading4 }}
            className="xs:max-sm:text-center"
          >
            Withstanding hurricane force winds and seismic events, meeting the
            unique demands of themed-entertainment rides, or minimizing
            vibration in research or performing arts centers are all challenges
            our structural engineers solve.
          </Typography.Text>
        </div>
      </Flex>
      <Flex flex="1" justify="flex-start" className="xs:max-sm:justify-center">
        <div className="w-[90%] ">
          <Typography.Text
            style={{ textWrap: "wrap", fontSize: token.fontSizeHeading4 }}
            className="xs:max-sm:text-center"
          >
            We analyze the building site and requirements, listen to your
            expectations and understand the desired aesthetic impact. Armed with
            that knowledge, we work closely with our owner, architectural and
            builder partners to create effective structural design solutions.
          </Typography.Text>
        </div>
      </Flex>
    </Flex>
  );
};

export default CustomServiceIntro;
