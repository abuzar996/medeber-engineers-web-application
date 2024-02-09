import { Flex, /*theme,*/ ConfigProvider, Input } from "antd";
import Icons from "./icons";
const color1 = "#1b1247";
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { useState } from "react";
interface SearchProps {}
const NavBarSearch: React.FC<SearchProps> = () => {
  //const { token } = theme.useToken();
  const [searchActive, setSearchActive] = useState(false);
  const handleSearchClick = () => {
    setSearchActive((searchActive) => !searchActive);
  };
  return (
    <Flex
      align="center"
      className={`xs:max-md:${
        searchActive ? "flex-1 pl-[10px]" : "justify-end"
      }`}
      gap="middle"
    >
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBg: "transparent",
              hoverBg: "transparent",
              activeBorderColor: color1,
              colorTextPlaceholder: color1,
              hoverBorderColor: color1,
            },
          },
        }}
      >
        <Input
          className={`bg-transparent xs:max-md:${searchActive ? "" : "hidden"}`}
          placeholder="Search"
          style={{
            color: color1,
            borderRadius: "15px",
            width: "100%",
            borderColor: color1,
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
      <Flex
        align="center"
        justify="flex:end"
        flex={1}
        className={`md:hidden ${searchActive ? "hidden" : ""}`}
      >
        <Icons>
          <CiSearch onClick={handleSearchClick} />
        </Icons>
      </Flex>
      <Flex
        align="center"
        justify="flex:end"
        flex={1}
        className={`md:hidden ${!searchActive ? "hidden" : ""}`}
      >
        <Icons>
          <IoMdCloseCircleOutline size="25px" onClick={handleSearchClick} />
        </Icons>
      </Flex>
    </Flex>
  );
};

export default NavBarSearch;
