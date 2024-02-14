import {
  theme,
  Flex,
  Typography,
  Drawer,
  Dropdown,
  Menu,
  ConfigProvider,
} from "antd";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useScreens } from "../../../../hooks/useScreen";
import { FaChevronDown } from "react-icons/fa";
import type { DrawerProps } from "antd";
import { IoMdCloseCircleOutline } from "react-icons/io";
import type { DropdownProps, MenuProps } from "antd";
import { useState } from "react";
import { useMemo } from "react";
const color1 = "#1b1247";
import { DefaultOptionType } from "antd/es/select";
import { items } from "../../utills/data";
const rootSubmenuKeys = ["1"];
import "../../layout/scroll.css";

interface NavContentProps {
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
  navData?: DefaultOptionType;
  menuActive: boolean;
  setMenuActive: (val: boolean) => void;
}
const NavContent: React.FC<NavContentProps> = ({
  isOpen,
  setIsOpen,
  navData,
  menuActive,
  setMenuActive,
}) => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState([""]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const placement: DrawerProps["placement"] = useMemo(() => "right", []);

  const [isMobile, isLowTab, isPotraitTab, isDesktopOrLaptop] = useScreens();
  const handleDrawerClose = () => {
    setMenuActive(false);
  };

  const handleMenuClick: MenuProps["onClick"] = (info) => {
    const route = navData!.items.find(
      (item: DefaultOptionType) => item.key === info.key
    ).routes;
    navigate(navData!.route + "/" + route);
  };
  const handleVisitClicked = () => {
    setOpenKeys([""]);
    setIsOpen && setIsOpen(false);
    navigate(navData!.route);
  };
  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setIsOpen && setIsOpen(nextOpen);
    }
  };

  return (
    <Flex flex={1} justify="space-around" className="select-none">
      {(isMobile || isLowTab || isPotraitTab) && menuActive && (
        <Drawer
          styles={{
            content: {
              backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
            },
          }}
          title={
            <Flex>
              <Typography.Text
                style={{
                  fontSize: token.fontSizeHeading4,
                  color: "#efc75e",
                }}
              >
                Menu
              </Typography.Text>
            </Flex>
          }
          footer={
            <Flex justify="center">
              <Typography.Text>
                <span style={{ color: "white" }}>M.E.D.E.B.E.R</span>
              </Typography.Text>
            </Flex>
          }
          closeIcon={
            <IoMdCloseCircleOutline size={25} className="fill-[#efc75e]" />
          }
          placement={placement}
          closable={true}
          onClose={handleDrawerClose}
          open={menuActive}
          destroyOnClose
          key={placement}
        >
          <div style={{ height: "100%" }}>
            <Menu
              items={items}
              style={{
                background: "transparent",
                fontWeight: token.fontWeightStrong,
                color: "#efc75e",
              }}
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
            />
          </div>
        </Drawer>
      )}
      {isDesktopOrLaptop && (
        <Flex
          gap="middle"
          style={{
            padding: token.paddingXS,
            cursor: "pointer",
          }}
          align="center"
        >
          {navData!.icon}
          {navData && navData.items !== null ? (
            <ConfigProvider
              theme={{
                components: {
                  Dropdown: {
                    colorBgElevated: navData.id !== 4 ? "#3b82f6" : "#1b1247",
                  },
                },
              }}
            >
              <Dropdown
                overlayStyle={{ padding: 20 }}
                menu={{
                  items: navData!.items,
                  onClick: handleMenuClick,

                  id: "element",
                  style: {
                    width: "100%",

                    backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
                  },
                }}
                dropdownRender={(menu) => (
                  <Flex
                    style={{
                      minWidth: "400px",
                      borderRadius: token.borderRadiusLG,
                      background: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
                    }}
                    vertical
                  >
                    <Flex
                      style={{
                        maxHeight: "200px",
                        minWidth: "100%",
                        overflowY: "scroll",
                      }}
                    >
                      {menu}
                    </Flex>
                    <Flex
                      flex="1"
                      justify="center"
                      gap="small"
                      align="center"
                      style={{
                        padding: token.paddingXS,
                        borderTop: "1px solid #efc75e",
                        color: "#efc75e",
                      }}
                      className="hover:underline select-none"
                      onClick={handleVisitClicked}
                    >
                      <Typography.Text
                        style={{
                          fontSize: token.fontSizeHeading5,
                          color: "#efc75e",
                          cursor: "pointer",
                        }}
                      >
                        Visit Full Site
                      </Typography.Text>
                      <IoMdArrowRoundForward />
                    </Flex>
                  </Flex>
                )}
                destroyPopupOnHide
                arrow
                onOpenChange={handleOpenChange}
                open={isOpen}
              >
                <Flex align="center" gap="middle">
                  <Typography.Text
                    style={{
                      color: "#efc75e",
                      fontWeight: token.fontWeightStrong,
                    }}
                  >
                    {navData?.label}
                  </Typography.Text>
                  {navData!.items && (
                    <FaChevronDown className="fill-[#efc75e]" />
                  )}
                </Flex>
              </Dropdown>
            </ConfigProvider>
          ) : (
            <Typography.Text
              style={{ color: color1, fontWeight: token.fontWeightStrong }}
            >
              {navData?.label}
            </Typography.Text>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default NavContent;
