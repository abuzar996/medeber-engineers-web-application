import { Flex, theme, ConfigProvider, Input } from "antd";
import Icons from "./icons";
const color1 = "#1b1247";
import { CiSearch } from "react-icons/ci";
const NavBarSearch = () => {
  const { token } = theme.useToken();
  return (
    <Flex align="center">
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
          className="bg-transparent "
          placeholder="Search"
          style={{
            color: token.colorBgBase,
            borderRadius: "15px",
            width: "270px",
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
    </Flex>
  );
};

export default NavBarSearch;
