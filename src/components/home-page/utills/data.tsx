import Icons from "../containers/navbar/icons";
import { HomepageData } from "../types";
import { IoIosPeople } from "react-icons/io";
import { TbFileDescription } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { MdPrecisionManufacturing } from "react-icons/md";

import { IoIosContacts } from "react-icons/io";
import { SiEventstore } from "react-icons/si";
import type { MenuProps } from "antd";
import { RiProjectorFill } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { MdElectricBolt } from "react-icons/md";
import { SiInstructure } from "react-icons/si";
import { GiMechanicalArm } from "react-icons/gi";
import { TbNews } from "react-icons/tb";
import { SiBmcsoftware } from "react-icons/si";
import { GiRollingEnergy } from "react-icons/gi";

import { SiCoinmarketcap } from "react-icons/si";

import { MdOutlineAgriculture } from "react-icons/md";
export const navContentA: HomepageData[] = [
  {
    id: 1,
    label: "Services",
    icon: (
      <Icons>
        <FaServicestack className=" fill-inherit text-inherit" />
      </Icons>
    ),
    items: [
      {
        label: "Electrical Engineering",
        key: "1",
      },
      {
        label: "Mechanical Engineering",
        key: "2",
      },
      {
        label: "Structural Engineering",
        key: "3",
      },
      {
        label: "Software Development",
        key: "4",
      },
      {
        label: "Energy Services",
        key: "5",
      },
      {
        label: "Technology",
        key: "6",
      },
      {
        label: "Manufacturing",
        key: "7",
      },
    ],
  },
  {
    id: 2,
    label: "Portfolio",
    icon: (
      <Icons>
        <TbFileDescription />
      </Icons>
    ),
    items: [
      {
        label: "Projects",
        key: "1",
      },
      {
        label: "Experts",
        key: "2",
      },
      {
        label: "Markets",
        key: "3",
      },
    ],
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
    items: [
      {
        label: "Careers",
        key: "1",
      },
      {
        label: "Continue Education",
        key: "2",
      },
    ],
  },
  {
    id: 4,
    label: "About Us",
    icon: (
      <Icons>
        <TbArrowRoundaboutRight />
      </Icons>
    ),

    items: [
      {
        label: "Culture",
        key: "1",
      },
      {
        label: "News",
        key: "2",
      },
      {
        label: "Events",
        key: "3",
      },
    ],
  },
  {
    id: 5,
    label: "Contact Us",
    icon: (
      <Icons>
        <IoIosContacts />
      </Icons>
    ),
    items: [],
  },
];

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Services",
    icon: <FaServicestack />,
    children: [
      {
        key: "11",
        label: "Electrical Engineering",
        icon: <MdElectricBolt />,
      },
      {
        key: "12",
        label: "Mechanical Engineering",
        icon: <GiMechanicalArm />,
      },
      {
        key: "13",
        label: "Structural Engineering",
        icon: <SiInstructure />,
      },
      {
        key: "14",
        label: "Software Development",
        icon: <SiBmcsoftware />,
      },
      {
        key: "15",
        label: "Energy Services",
        icon: <GiRollingEnergy />,
      },
      {
        key: "16",
        label: "Technology",
        icon: <GrTechnology />,
      },
      {
        key: "17",
        label: "Manufacturing",
        icon: <MdPrecisionManufacturing />,
      },
    ],
  },
  {
    key: "2",
    label: "Portfolio",
    icon: <TbFileDescription />,
    style: { color: "#ffffff" },
    children: [
      { key: "21", label: "Projects", icon: <RiProjectorFill /> },
      { key: "22", label: "Experts", icon: <GrUserExpert /> },
      { key: "23", label: "Markets", icon: <SiCoinmarketcap /> },
    ],
  },
  {
    key: "3",
    label: "People",
    icon: <IoIosPeople />,
    children: [
      { key: "31", label: "Careers", icon: <RiProjectorFill /> },
      { key: "32", label: "Continue Education", icon: <MdCastForEducation /> },
    ],
  },
  {
    key: "4",
    label: "About Us",
    icon: <TbArrowRoundaboutRight />,
    children: [
      { key: "41", label: "Culture", icon: <MdOutlineAgriculture /> },
      { key: "42", label: "News", icon: <TbNews /> },

      { key: "43", label: "Events", icon: <SiEventstore /> },
    ],
  },
  {
    key: "5",
    label: "Contact Us",
    icon: <IoIosContacts />,
  },
];
