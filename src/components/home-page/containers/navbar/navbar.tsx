import { Flex, theme, Typography } from "antd";
import NavContent from "./content";
import MedeberLogo from "../../../../assets/Images/medeber.png";
import { FIRMNAME } from "../../types";
import { navContentA, navContentB } from "../../utills/data";
import NavBarSearch from "./search";
const color1 = "#1b1247";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Icons from "./icons";
import { useScreens } from "../../../../hooks/useScreen";
//const color2 = "#efc75e";

const NavBar = () => {
  const { token } = theme.useToken();
  const [menuActive, setMenuActive] = useState(false);
  const handleMenuClicked = () => {
    setMenuActive((menuActive) => !menuActive);
  };
  const [isMobile, isLowTab, isPotraitTab, isDesktopOrLaptop] = useScreens();
  return (
    <Flex
      flex="1"
      justify="space-between"
      className=" h-fit "
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

        {!isMobile && (
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
        )}
      </Flex>

      {((!isMobile && !isLowTab && !isPotraitTab && isDesktopOrLaptop) ||
        menuActive) && (
        <Flex justify="space-around" flex="1">
          <NavContent
            navData={navContentA}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
        </Flex>
      )}
      <Flex flex="1" justify="center">
        <NavBarSearch />
      </Flex>
      {!isMobile && !isLowTab && !isPotraitTab && isDesktopOrLaptop && (
        <Flex justify="space-around" flex="1">
          <NavContent
            navData={navContentB}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
        </Flex>
      )}
      {(isMobile || isLowTab || isPotraitTab) && (
        <Flex justify="flex-end" align="center">
          <Icons>
            <RxHamburgerMenu onClick={handleMenuClicked} />
          </Icons>
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
