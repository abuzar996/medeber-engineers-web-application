import { Flex, Typography, theme } from "antd";

import Person from "../../../../assets/Images/person.png";
interface CustomProjectCardProps {
  type: boolean | "info" | "news";
}

const NewsTypedCard = () => {
  const { token } = theme.useToken();
  return (
    <Flex flex="1" vertical>
      <Flex
        flex="1"
        justify="space-between"
        style={{ border: "1px solid #efc75e", padding: token.paddingSM }}
      >
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading5,
            color: "#efc75e",
            fontWeight: token.fontWeightStrong,
          }}
        >
          JANUARY 23, 2024
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading5,
            color: "#efc75e",
            fontWeight: token.fontWeightStrong,
          }}
        >
          NEWS
        </Typography.Text>
      </Flex>
      <Flex
        flex="1"
        style={{ border: "1px solid #efc75e", padding: token.paddingSM }}
      >
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading4,
            color: "#efc75e",
            fontWeight: token.fontWeightStrong,
          }}
        >
          JANUARY 23, 2024 NEWS TLC Engineering Solutions Announces the
          Promotion of Justin Mulhollan to Regional Director
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

const InfoTypedCard = () => {
  const { token } = theme.useToken();
  return (
    <>
      <Flex flex="1" style={{ padding: token.paddingXS }} vertical>
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading3,
            color: "#efc75e",
            fontWeight: token.fontWeightStrong,
          }}
        >
          Project Name
        </Typography.Text>

        <Typography.Text
          style={{
            fontSize: token.fontSizeSM,
            fontWeight: token.fontWeightStrong,
            color: "#efc75e",
          }}
        >
          PE, LEED FELLO, WELL AP
        </Typography.Text>
      </Flex>

      <Flex style={{ padding: token.paddingXS }}>
        {" "}
        <Typography.Text
          style={{
            fontSize: token.fontSizeLG,
            fontWeight: token.fontWeightStrong,
            color: "#efc75e",
            fontStyle: "italic",
          }}
        >
          Principal| Direcetor of PEAK Institue
        </Typography.Text>
      </Flex>

      <Flex style={{ padding: token.paddingXS }}>
        {" "}
        <Typography.Text
          style={{
            fontSize: token.fontSizeLG,
            fontWeight: "lighter",
            color: "#efc75e",
            fontStyle: "italic",
          }}
        >
          Deerfield Beach, Florida
        </Typography.Text>
      </Flex>
    </>
  );
};
const CustomInfoCard: React.FC<CustomProjectCardProps> = ({ type }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      className={`w-full ${"flex-col"} hover:shadow-[-5px_-2px_10px_5px_#c8bef7]`}
      style={{
        backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
        border: "1px solid #efc75e",
        borderRadius: token.borderRadiusLG,
      }}
    >
      <Flex flex="1">
        <img
          className="w-full"
          src={Person}
          style={{
            height: "300px",
            borderRadius: token.borderRadiusLG,
          }}
        />
      </Flex>

      {type === "news" && <NewsTypedCard />}
      {type === "info" && <InfoTypedCard />}
    </Flex>
  );
};

export default CustomInfoCard;
