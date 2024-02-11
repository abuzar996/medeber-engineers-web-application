import Icons from "../containers/navbar/icons";

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
      <FaServicestack className=" fill-inherit text-inherit" />
    </Icons>
  ),
  items: [
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <MdElectricBolt className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Electrical Engineering
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "1",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <GiMechanicalArm className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Mechanical Engineering
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "2",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <SiInstructure className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Structural Engineering
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "3",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <SiBmcsoftware className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Software Development
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "4",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <GiRollingEnergy className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Energy Services
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "5",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <GrTechnology className="fill-whit text-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Technology
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "6",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <MdPrecisionManufacturing className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
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
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <RiProjectorFill className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Projects
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "1",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <GrUserExpert className="fill-white text-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Experts
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "2",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <SiCoinmarketcap className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
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
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <RiProjectorFill className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Careers
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "1",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <GrUserExpert className="fill-white text-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
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
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <MdOutlineAgriculture className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              Culture
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "1",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <TbNews className="text-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
              News
            </Typography.Text>
          </Flex>
        </Card>
      ),
      key: "2",
    },
    {
      label: (
        <Card style={{ background: "transparent" }}>
          <Flex gap="middle" align="center">
            <SiEventstore className="fill-white" />
            <Typography.Text style={{ fontWeight: "bolder", color: "white" }}>
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
