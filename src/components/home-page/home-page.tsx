import { Flex, Input, theme, Typography, ConfigProvider } from "antd";
import { ReactNode } from "react";
import { IoIosPeople } from "react-icons/io";
import { TbFileDescription } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoIosContacts } from "react-icons/io";
import { IconContext } from "react-icons";
import MedeberLogo from "../../assets/Images/medeber.png";
import { CiSearch } from "react-icons/ci";
import { FIRMNAME } from "./types";
interface HomepageData {
  id: number;
  label: string;
  icon: ReactNode;
}
const color1 = "#1b1247";
//const color2 = "#efc75e";
interface IconProps {
  children: ReactNode;
}
const Icons: React.FC<IconProps> = ({ children }) => {
  return (
    <IconContext.Provider value={{ color: color1, size: "25" }}>
      {children}
    </IconContext.Provider>
  );
};

const homepageData1: HomepageData[] = [
  {
    id: 1,
    label: "Services",
    icon: (
      <Icons>
        <FaServicestack />
      </Icons>
    ),
  },
  {
    id: 2,
    label: "Portfolio",
    icon: (
      <Icons>
        <TbFileDescription />
      </Icons>
    ),
  },
];
const homePageData2: HomepageData[] = [
  {
    id: 3,
    label: "People",
    icon: (
      <Icons>
        <IoIosPeople />
      </Icons>
    ),
  },
  {
    id: 4,
    label: "About Us",
    icon: (
      <Icons>
        <TbArrowRoundaboutRight />
      </Icons>
    ),
  },
  {
    id: 3,
    label: "Contact Us",
    icon: (
      <Icons>
        <IoIosContacts />
      </Icons>
    ),
  },
];
interface NavContentProps {
  navData: HomepageData[];
}
const NavContent: React.FC<NavContentProps> = ({ navData }) => {
  const { token } = theme.useToken();
  return (
    <>
      {navData.map((data) => (
        <Flex
          gap="middle"
          style={{ color: token.colorBgBase, padding: token.paddingXS }}
          align="center"
          className="hover:opacity-[0.9] hover:underline"
        >
          {data.icon}
          <Typography.Text
            key={data.id}
            style={{
              color: color1,
              fontWeight: token.fontWeightStrong,
              fontStyle: "italic",
            }}
            className="select-none cursor-pointer"
          >
            {data.label}
          </Typography.Text>
        </Flex>
      ))}
    </>
  );
};

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

const HomePage = () => {
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
        >
          {FIRMNAME.NAME}
        </Typography.Text>
      </Flex>
      <NavContent navData={homepageData1} />
      <NavBarSearch />
      <NavContent navData={homePageData2} />
    </Flex>
  );
};

export default HomePage;
