import Icons from "../containers/navbar/icons";
import { HomepageData } from "../types";
import { IoIosPeople } from "react-icons/io";
import { TbFileDescription } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoIosContacts } from "react-icons/io";
export const navContentA: HomepageData[] = [
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
export const navContentB: HomepageData[] = [
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
    id: 5,
    label: "Contact Us",
    icon: (
      <Icons>
        <IoIosContacts />
      </Icons>
    ),
  },
];
