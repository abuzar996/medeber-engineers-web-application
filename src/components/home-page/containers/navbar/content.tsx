import { HomepageData } from "../../types";
import { theme, Flex, Typography, Drawer, Dropdown, Menu } from "antd";
import { useScreens } from "../../../../hooks/useScreen";
import type { DrawerProps } from "antd";
import { IoMdCloseCircleOutline } from "react-icons/io";
import type { DropdownProps, MenuProps } from "antd";
import { useState } from "react";
import { useMemo } from "react";
const color1 = "#1b1247";
const color2 = "#efc75e";
import Main from "../../../../assets/Images/main7.png";
import { items } from "../../utills/data";
const rootSubmenuKeys = ["1"];
interface NavContentProps {
  navData: HomepageData[];
  menuActive: boolean;
  setMenuActive: (val: boolean) => void;
}
const NavContent: React.FC<NavContentProps> = ({
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
  const [open, setOpen] = useState(false);
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
      setOpen(nextOpen);
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
                <span style={{ color: color2 }}>M.E.D.E.B.E.R</span>
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
      {isDesktopOrLaptop &&
        navData.map((data, index) => (
          <Flex
            key={data.id}
            gap="middle"
            style={{
              padding: token.paddingXS,
              cursor: "pointer",
            }}
            align="center"
          >
            {data.icon}

            <Dropdown
              overlayStyle={{ backgroundColor: "red" }}
              key={index}
              menu={{
                items: data.items,
                onClick: handleMenuClick,
                style: {
                  width: "700px",
                  height: "300px",
                  backgroundColor: "red",
                },
              }}
              onOpenChange={handleOpenChange}
              open={open}
            >
              <Typography.Text
                style={{ color: color1, fontWeight: token.fontWeightStrong }}
              >
                {data.label}
              </Typography.Text>
            </Dropdown>
          </Flex>
        ))}
    </Flex>
  );
};

export default NavContent;
