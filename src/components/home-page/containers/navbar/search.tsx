import { Flex, theme, ConfigProvider, Input } from "antd";
import Icons from "./icons";
//const color1 = "#1b1247";
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { useScreens } from "../../../../hooks/useScreen";
import { useState } from "react";
interface SearchProps {}
const NavBarSearch: React.FC<SearchProps> = () => {
  const { token } = theme.useToken();
  const [searchActive, setSearchActive] = useState(false);
  const [isMobile, isLowTab, isPotraitTab, isDesktopOrLaptop] = useScreens();
  const handleSearchClick = () => {
    setSearchActive((searchActive) => !searchActive);
  };
  return (
    <Flex
      align="center"
      gap="middle"
      flex="1"
      style={{ paddingInline: token.paddingMD }}
    >
      {(searchActive || isPotraitTab || isDesktopOrLaptop) && (
        <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBg: "transparent",
                hoverBg: "transparent",
                activeBorderColor: "#efc75e",
                colorTextPlaceholder: "#efc75e",
                hoverBorderColor: "#efc75e",
              },
            },
          }}
        >
          <Input
            className={`bg-transparent`}
            placeholder="Search"
            style={{
              color: "#efc75e",
              borderRadius: "15px",
              width: "100%",
              borderColor: "#efc75e",
            }}
            allowClear={true}
            prefix={
              <Icons>
                <CiSearch />
              </Icons>
            }
            size="middle"
          />
        </ConfigProvider>
      )}
      {!searchActive && (isMobile || isLowTab) && (
        <Flex align="center" justify="flex-end" flex="1">
          <Icons>
            <CiSearch onClick={handleSearchClick} />
          </Icons>
        </Flex>
      )}
      {searchActive && (isMobile || isLowTab) && (
        <Flex align="center" justify="flex-end" flex={1}>
          <Icons>
            <IoMdCloseCircleOutline size="25px" onClick={handleSearchClick} />
          </Icons>
        </Flex>
      )}
    </Flex>
  );
};

export default NavBarSearch;
