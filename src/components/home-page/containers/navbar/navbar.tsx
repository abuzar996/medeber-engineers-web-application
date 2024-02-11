import { Flex, theme, Typography } from "antd";
import NavContent from "./content";
import MedeberLogo from "../../../../assets/Images/medeber.png";
import { FIRMNAME } from "../../types";
import { services, portfolio, people, contact, about } from "../../utills/data";
import NavBarSearch from "./search";
import Header from "../../../../assets/Images/header.png";

const color1 = "#1b1247";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Icons from "./icons";
import { useScreens } from "../../../../hooks/useScreen";
//const color2 = "#efc75e";

const NavBar = () => {
  const { token } = theme.useToken();
  const [menuActive, setMenuActive] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        backgroundImage: `url(${Header})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: token.paddingXS,
        maxHeight: "fit-content",
        boxShadow: "rgba(149, 157, 165, 0.6) 0px 0px 18px",
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

      {((isMobile && isLowTab && isPotraitTab && !isDesktopOrLaptop) ||
        menuActive) && (
        <Flex justify="space-around" flex="1">
          <NavContent
            setIsOpen={setIsServiceOpen}
            isOpen={isServiceOpen}
            navData={services}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
        </Flex>
      )}
      {isDesktopOrLaptop && (
        <NavContent
          navData={services}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
      )}
      {isDesktopOrLaptop && (
        <NavContent
          isOpen={isPortfolioOpen}
          setIsOpen={setIsPortfolioOpen}
          navData={portfolio}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
      )}
      <Flex flex="1" justify="center">
        <NavBarSearch />
      </Flex>
      {isDesktopOrLaptop && (
        <NavContent
          isOpen={isPeopleOpen}
          setIsOpen={setIsPeopleOpen}
          navData={people}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
      )}
      {isDesktopOrLaptop && (
        <NavContent
          isOpen={isContactOpen}
          setIsOpen={setIsContactOpen}
          navData={about}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
      )}
      {isDesktopOrLaptop && (
        <NavContent
          isOpen={false}
          navData={contact}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
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
