import Icons from "../containers/navbar/icons";

import Project1 from "../../../assets/Images/project1.png";
import Project2 from "../../../assets/Images/project2.png";
import Project3 from "../../../assets/Images/project3.png";

import { Flex, Card, Typography } from "antd";
import { DefaultOptionType } from "antd/es/select";
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

export const services: DefaultOptionType = {
  id: 1,
  label: "Services",
  icon: (
    <Icons>
      <FaServicestack />
    </Icons>
  ),
  items: [
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <MdElectricBolt className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Electrical Engineering
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "1",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <GiMechanicalArm className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Mechanical Engineering
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "2",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <SiInstructure className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Structural Engineering
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "3",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <SiBmcsoftware className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Software Development
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "4",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <GiRollingEnergy className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Energy Services
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "5",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <GrTechnology className="fill-whit text-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Technology
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "6",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <MdPrecisionManufacturing className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Manufacturing
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "7",
    },
  ],
};

export const portfolio: DefaultOptionType = {
  id: 2,
  label: "Portfolio",
  icon: (
    <Icons>
      <TbFileDescription />
    </Icons>
  ),
  items: [
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <RiProjectorFill className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Projects
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "1",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <GrUserExpert className="fill-[#efc75e] text-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Experts
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "2",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <SiCoinmarketcap className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Markets
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "3",
    },
  ],
};
export const people: HomepageData = {
  id: 3,
  label: "People",
  icon: (
    <Icons>
      <IoIosPeople />
    </Icons>
  ),
  items: [
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <RiProjectorFill className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Careers
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "1",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <GrUserExpert className="fill-[#efc75e] text-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Continue Education
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "2",
    },
  ],
};
export const about: DefaultOptionType = {
  id: 4,
  label: "About Us",
  icon: (
    <Icons>
      <TbArrowRoundaboutRight />
    </Icons>
  ),

  items: [
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <MdOutlineAgriculture className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Culture
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "1",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <TbNews className="text-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              News
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "2",
    },
    {
      label: (
        <Card style={{ background: "transparent", borderColor: "#efc75e" }}>
          <Flex gap="middle" align="center">
            <SiEventstore className="fill-[#efc75e]" />
            <Typography.Text style={{ fontWeight: "bolder", color: "#efc75e" }}>
              Events
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "3",
    },
  ],
};
export const contact: DefaultOptionType = {
  id: 5,
  label: "Contact Us",
  icon: (
    <Icons>
      <IoIosContacts />
    </Icons>
  ),
};

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Services",
    icon: <FaServicestack className="fill-[#efc75e]" />,
    children: [
      {
        key: "11",
        label: "Electrical Engineering",
        icon: <MdElectricBolt className="fill-[#efc75e]" />,
      },
      {
        key: "12",
        label: "Mechanical Engineering",
        icon: <GiMechanicalArm className="fill-[#efc75e]" />,
      },
      {
        key: "13",
        label: "Structural Engineering",
        icon: <SiInstructure className="fill-[#efc75e]" />,
      },
      {
        key: "14",
        label: "Software Development",
        icon: <SiBmcsoftware className="fill-[#efc75e]" />,
      },
      {
        key: "15",
        label: "Energy Services",
        icon: <GiRollingEnergy className="fill-[#efc75e]" />,
      },
      {
        key: "16",
        label: "Technology",
        icon: <GrTechnology className="text-[#efc75e]" />,
      },
      {
        key: "17",
        label: "Manufacturing",
        icon: <MdPrecisionManufacturing className="fill-[#efc75e]" />,
      },
    ],
  },
  {
    key: "2",
    label: "Portfolio",
    icon: <TbFileDescription style={{ color: "#efc75e" }} />,
    style: { color: "#ffffff" },
    children: [
      {
        key: "21",
        label: "Projects",
        icon: <RiProjectorFill style={{ color: "#efc75e" }} />,
      },
      {
        key: "22",
        label: "Experts",
        icon: <GrUserExpert style={{ color: "#efc75e" }} />,
      },
      {
        key: "23",
        label: "Markets",
        icon: <SiCoinmarketcap className="fill-[#efc75e]" />,
      },
    ],
  },
  {
    key: "3",
    label: "People",
    icon: <IoIosPeople style={{ color: "#efc75e" }} />,
    children: [
      {
        key: "31",
        label: "Careers",
        icon: <RiProjectorFill className="fill-[#efc75e]" />,
      },
      {
        key: "32",
        label: "Continue Education",
        icon: <MdCastForEducation className="fill-[#efc75e]" />,
      },
    ],
  },
  {
    key: "4",
    label: "About Us",
    icon: <TbArrowRoundaboutRight style={{ color: "#efc75e" }} />,
    children: [
      {
        key: "41",
        label: "Culture",
        icon: <MdOutlineAgriculture style={{ color: "#efc75e" }} />,
      },
      { key: "42", label: "News", icon: <TbNews className="fill-[#efc75e]" /> },

      {
        key: "43",
        label: "Events",
        icon: <SiEventstore className="fill-[#efc75e]" />,
      },
    ],
  },
  {
    key: "5",
    label: "Contact Us",
    icon: <IoIosContacts style={{ color: "#efc75e" }} />,
  },
];
export const projectData = [
  {
    id: 1,
    name: "Website Application Development",
    image: Project1,
    desc: "Develoement of website application for bussiness growth and representation",
  },
  {
    id: 2,
    name: "Mobile Application Development",
    image: Project2,
    desc: "Development of mobile application for bussiness growth and representation",
  },
  {
    id: 3,
    name: "Desktop Application Development",
    image: Project3,
    desc: "Development of desktop application for bussiness growth and representation",
  },
];
