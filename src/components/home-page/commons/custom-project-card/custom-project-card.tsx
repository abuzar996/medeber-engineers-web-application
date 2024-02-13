import { Flex, Typography, theme } from "antd";
import Img1 from "../../../../assets/Images/img2.png";
export interface CustomProjectCardProps {
  type: boolean | "news" | "info";
}
const CustomProjectCard: React.FC<CustomProjectCardProps> = ({ type }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      className={`w-full ${
        type === true ? "flex-col-reverse" : "flex-col"
      } hover:shadow-[-5px_-2px_10px_5px_#c8bef7]`}
      style={{
        backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
        border: "1px solid #efc75e",
        borderRadius: token.borderRadiusLG,
      }}
    >
      <Flex flex="1">
        <img
          className="w-full"
          src={Img1}
          style={{
            height: "300px",
            borderRadius: token.borderRadiusLG,
          }}
        />
      </Flex>
      {type && (
        <Flex flex="1" style={{ padding: token.paddingXS }} align="center">
          <Typography.Text
            style={{
              fontSize: token.fontSizeHeading5,
              color: "#efc75e",
              // fontWeight: token.fontWeightStrong,
            }}
          >
            Hello this is project description
          </Typography.Text>
        </Flex>
      )}
      <Flex flex="1" style={{ padding: token.paddingXS }}>
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading3,
            color: "#efc75e",
            fontWeight: token.fontWeightStrong,
          }}
        >
          Project Name
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

export default CustomProjectCard;
