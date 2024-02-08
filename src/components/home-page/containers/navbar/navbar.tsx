import { Flex, theme, Typography } from "antd";

import NavContent from "./content";
import MedeberLogo from "../../../../assets/Images/medeber.png";

import { FIRMNAME } from "../../types";
import { navContentA, navContentB } from "../../utills/data";
import NavBarSearch from "./search";
const color1 = "#1b1247";
//const color2 = "#efc75e";

const NavBar = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      justify="space-between"
      className="h-fit"
      style={{
        backgroundColor: "transparent",
        padding: token.paddingXS,
        position: "sticky",
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Flex align="center" gap="small">
        <img
          src={MedeberLogo}
          alt="logo"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />

        <Typography.Text
          style={{
            color: color1,
            fontWeight: token.fontWeightStrong,
            fontSize: token.fontSizeHeading5,
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {FIRMNAME.NAME}
        </Typography.Text>
      </Flex>
      <NavContent navData={navContentA} />
      <NavBarSearch />
      <NavContent navData={navContentB} />
    </Flex>
  );
};

export default NavBar;
