import { Flex, theme, Typography } from "antd";
import MedeberLogo from "../../../../assets/Images/medeber.png";
import Icons from "./icons";
import { useState } from "react";
import { useScreens } from "../../../../hooks/useScreen";
import { RxHamburgerMenu } from "react-icons/rx";
import { FIRMNAME } from "../../types";
import { useNavigate } from "react-router-dom";
import { services, portfolio, people, contact, about } from "../../utills/data";
import NavContent from "./content";
import NavBarSearch from "./search";

const NavBar = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobile, isLowTab, isPotraitTab, isDesktopOrLaptop] = useScreens();

  const handleMenuClicked = () => {
    setMenuActive((menuActive) => !menuActive);
  };

  const handleHomeClicked = () => {
    navigate("/");
  };
  return (
    <Flex
      flex="1"
      justify="space-between"
      className=" h-fit "
      style={{
        backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
        padding: token.paddingXS,
        maxHeight: "fit-content",
        boxShadow: "rgba(149, 157, 165, 0.6) 0px 0px 18px",
      }}
    >
      <Flex align="center" gap="small" onClick={handleHomeClicked}>
        <img
          src={MedeberLogo}
          alt="logo"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />

        {!isMobile && (
          <Typography.Text
            style={{
              color: "#efc75e",
              fontWeight: token.fontWeightStrong,
              fontSize: token.fontSizeHeading5,

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
      <Flex flex="1" justify="center">
        <NavBarSearch />
      </Flex>
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
