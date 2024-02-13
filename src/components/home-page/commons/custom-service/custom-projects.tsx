import { Flex, Typography, theme } from "antd";
import CustomProjectCard from "../custom-project-card";
import CustomSlider from "../custom-slider";
import Project from "../../../../assets/Images/project.png";
const CustomProjects = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      className="w-full pb-[170px]"
      align="center"
      flex={1}
      gap="large"
      style={{
        padding: token.paddingSM,
        background: `url(${Project})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
      vertical
    >
      <Flex flex="1" vertical>
        <Flex
          align="flex-start"
          className=" w-full "
          justify="center"
          style={{ padding: token.paddingSM }}
          vertical
        >
          <Flex flex="1" style={{ padding: token.paddingSM }}>
            <Flex style={{ padding: token.paddingSM }}>
              <Flex style={{ padding: token.paddingSM }}>
                <Typography.Text
                  style={{
                    fontSize: token.fontSizeHeading1,
                    fontWeight: token.fontWeightStrong,
                    padding: token.paddingSM,
                    fontStyle: "italic",
                  }}
                  className="text-primary"
                >
                  Projects
                </Typography.Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flex="1" style={{ padding: token.paddingSM }} justify="center">
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading3,
                //fontWeight: token.fontWeightStrong,
                padding: token.paddingSM,
                //fontStyle: "italic",
              }}
              className="text-primary text-center"
            >
              Opertaions keep the lights on, strategy provides a light at the
              end of the tunnel, but project management is the train engine that
              moves the organization
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
      <CustomSlider type={false} Child={CustomProjectCard} />
    </Flex>
  );
};

export default CustomProjects;
