import { Flex, theme, Typography } from "antd";
import NavContent from "./content";
import MedeberLogo from "../../../../assets/Images/medeber.png";
import { FIRMNAME } from "../../types";
import { navContentA, navContentB } from "../../utills/data";
import NavBarSearch from "./search";
const color1 = "#1b1247";
import { RxHamburgerMenu } from "react-icons/rx";
import Icons from "./icons";

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
          className="xs:max-sm:hidden"
        >
          {FIRMNAME.NAME}
        </Typography.Text>
      </Flex>

      <Flex justify="space-around" flex={1} className="xs:max-md:hidden">
        <NavContent navData={navContentA} />
      </Flex>
      <Flex
        flex="1"
        className="justify-center xs:max-md:justify-end xs:max-md:pr-[10px]"
      >
        <NavBarSearch />
      </Flex>
      <Flex justify="space-around" flex={1} className="xs:max-md:hidden">
        <NavContent navData={navContentB} />
      </Flex>
      <Flex justify="flex-end" align="center" className="md:hidden">
        <Icons>
          <RxHamburgerMenu />
        </Icons>
      </Flex>
    </Flex>
  );
};

export default NavBar;
