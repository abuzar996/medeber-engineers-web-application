import { Flex, Typography, theme } from "antd";

export interface CustomProjectCardProps {
  type: boolean | "news" | "info";
  projectName?: string;
  name?: string;
  image: string;
  date?: string;
  desc?: string;
  designations?: string;
  location?: string;
  occupations?: string;
}
const CustomProjectCard: React.FC<CustomProjectCardProps> = ({
  type,
  projectName,
  desc,
  image,
}) => {
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
          src={image}
          style={{
            height: "300px",
            borderRadius: token.borderRadiusLG,
          }}
        />
      </Flex>
      {type && (
        <Flex flex="1" style={{ padding: token.paddingXS }} align="center">
          {desc && (
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading5,
                color: "#efc75e",
              }}
            >
              {desc}
            </Typography.Text>
          )}
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
          {projectName}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

export default CustomProjectCard;
