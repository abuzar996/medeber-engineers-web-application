import { HomepageData } from "../../types";
import { theme, Flex, Typography } from "antd";

const color1 = "#1b1247";
interface NavContentProps {
  navData: HomepageData[];
  menuActive: boolean;
}
const NavContent: React.FC<NavContentProps> = ({ navData, menuActive }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      justify="space-around"
      className={`xs:max-md:${
        menuActive
          ? "absolute top-[20px] h-[200px] bottom-0 z-10 bg-[white] flex-col"
          : "hidden"
      }`}
    >
      {navData.map((data) => (
        <Flex
          key={data.id}
          gap="middle"
          style={{ color: token.colorBgBase, padding: token.paddingXS }}
          align="center"
          className={`hover:opacity-[0.9] hover:underline xs:max-md:${
            menuActive ? "flex-col " : "hidden"
          }`}
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
    </Flex>
  );
};

export default NavContent;
