import { HomepageData } from "../../types";
import {
  theme,
  Flex,
  Typography,
  Drawer,
  Dropdown,
  Menu,
  ConfigProvider,
} from "antd";
import { useScreens } from "../../../../hooks/useScreen";
import { FaChevronDown } from "react-icons/fa";
import type { DrawerProps } from "antd";
import { IoMdCloseCircleOutline } from "react-icons/io";
import type { DropdownProps, MenuProps } from "antd";
import { useState } from "react";
import { useMemo } from "react";
const color1 = "#1b1247";
import { DefaultOptionType } from "antd/es/select";
//const color2 = "#efc75e";
import Main from "../../../../assets/Images/main7.png";
import { items } from "../../utills/data";
const rootSubmenuKeys = ["1"];
import "../../layout/scroll.css";
interface NavContentProps {
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
  navData?: HomepageData | DefaultOptionType;
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

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      // setOpen(false);
    }
  };

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setIsOpen && setIsOpen(nextOpen);
    }
  };

  return (
    <Flex flex={1} justify="space-around">
      {(isMobile || isLowTab || isPotraitTab) && menuActive && (
        <Drawer
          styles={{
            content: {
              backgroundImage: `url(${Main})`,
            },
          }}
          title={
            <Flex>
              <Typography.Text
                style={{
                  fontSize: token.fontSizeHeading4,
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
          closeIcon={<IoMdCloseCircleOutline />}
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
                color: token.colorBgBase,
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
                    width: "400px",
                    maxHeight: "300px",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
                  },
                }}
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
