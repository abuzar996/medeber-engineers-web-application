import { HomepageData } from "../../types";
import { theme, Flex, Typography } from "antd";
const color1 = "#1b1247";
interface NavContentProps {
  navData: HomepageData[];
}
const NavContent: React.FC<NavContentProps> = ({ navData }) => {
  const { token } = theme.useToken();
  return (
    <>
      {navData.map((data) => (
        <Flex
          key={data.id}
          gap="middle"
          style={{ color: token.colorBgBase, padding: token.paddingXS }}
          align="center"
          className="hover:opacity-[0.9] hover:underline"
        >
          {data.icon}
          <Typography.Text
            style={{
              color: color1,
              fontWeight: token.fontWeightStrong,
              fontStyle: "italic",
            }}
            className="select-none cursor-pointer"
          >
            {data.label}
          </Typography.Text>
        </Flex>
      ))}
    </>
  );
};

export default NavContent;
