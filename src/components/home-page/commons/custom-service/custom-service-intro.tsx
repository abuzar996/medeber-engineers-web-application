import { Flex, Typography, theme } from "antd";
export interface CustomServiceIntroProps {
  intro1: string;
  intro2: string;
}
const CustomServiceIntro: React.FC<CustomServiceIntroProps> = ({
  intro1,
  intro2,
}) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      style={{
        width: "90%",
      }}
      className="select-none xs:max-sm:flex-col pb-[150px]"
    >
      <Flex flex="1" className="xs:max-sm:justify-center">
        <div className="w-[90%]">
          <Typography.Text
            style={{ fontSize: token.fontSizeHeading4 }}
            className="xs:max-sm:text-center"
          >
            {intro1}
          </Typography.Text>
        </div>
      </Flex>
      <Flex flex="1" justify="flex-start" className="xs:max-sm:justify-center">
        <div className="w-[90%] ">
          <Typography.Text
            style={{ textWrap: "wrap", fontSize: token.fontSizeHeading4 }}
            className="xs:max-sm:text-center"
          >
            {intro2}
          </Typography.Text>
        </div>
      </Flex>
    </Flex>
  );
};

export default CustomServiceIntro;
