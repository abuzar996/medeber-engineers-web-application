import { Flex, Typography, theme } from "antd";

interface CustomProjectCardProps {
  type: boolean | "info" | "news";
  projectName?: string;
  name?: string;
  image: string;
  date?: string;
  desc?: string;
  designations?: string;
  location?: string;
  occupations?: string;
}

const NewsTypedCard = ({
  name,
  date,
  desc,
}: {
  name: string;
  date: string;
  desc: string;
}) => {
  const { token } = theme.useToken();
  return (
    <Flex flex="1" vertical>
      <Flex
        justify="space-between"
        className="h-fit"
        style={{ border: "1px solid #efc75e", padding: token.paddingSM }}
      >
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading5,
            color: "#efc75e",
            fontWeight: token.fontWeightStrong,
          }}
        >
          {date}
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: token.fontSizeHeading5,
            color: "#efc75e",
            fontWeight: token.fontWeightStrong,
          }}
        >
          {name}
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
          {desc}
          {/* { JANUARY 23, 2024 NEWS TLC Engineering Solutions Announces the
          Promotion of Justin Mulhollan to Regional Director} */}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

const InfoTypedCard = ({
  name,
  designations,
  occupations,
  location,
}: {
  name: string;
  designations: string;
  location: string;
  occupations: string;
}) => {
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
          {name}
        </Typography.Text>

        <Typography.Text
          style={{
            fontSize: token.fontSizeSM,
            fontWeight: token.fontWeightStrong,
            color: "#efc75e",
          }}
        >
          {occupations}
          {/* PE, LEED FELLO, WELL AP */}
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
          {designations}
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
          {location}
        </Typography.Text>
      </Flex>
    </>
  );
};
const CustomInfoCard: React.FC<CustomProjectCardProps> = ({
  type,
  //projectName,
  location,
  designations,
  occupations,
  name,
  image,
  date,
  desc,
}) => {
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
          src={image}
          style={{
            height: "300px",
            borderRadius: token.borderRadiusLG,
          }}
        />
      </Flex>

      {type === "news" && (
        <NewsTypedCard desc={desc!} date={date!} name={name!} />
      )}
      {type === "info" && (
        <InfoTypedCard
          occupations={occupations!}
          designations={designations!}
          name={name!}
          location={location!}
        />
      )}
    </Flex>
  );
};

export default CustomInfoCard;
