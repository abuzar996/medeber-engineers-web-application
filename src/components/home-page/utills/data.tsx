import Icons from "../containers/navbar/icons";
import Person from "../../../assets/Images/person.png";
import Experts from "../../../assets/Images/experts.png";
import Expertise from "../../../assets/Images/expertise.png";
import History from "../../../assets/Images/history.jpeg";
import Disaster from "../../../assets/Images/disaster.jpeg";
import Distribution from "../../../assets/Images/distribution.jpeg";
import Building from "../../../assets/Images/build.png";
import Sustainable from "../../../assets/Images/sustainable.png";
import Planning from "../../../assets/Images/planning.png";
import { IoWifiOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import Education from "../../../assets/Images/markets/education.png";
import Commercial from "../../../assets/Images/markets/commercial.png";
import Entertainment from "../../../assets/Images/markets/entertainment.png";
import Government from "../../../assets/Images/markets/government.png";
import Healthcare from "../../../assets/Images/markets/healthcare.png";
import Services from "../../../assets/Images/services/services.png";
import Electrical from "../../../assets/Images/services/electrical.png";
import Service2 from "../../../assets/Images/services/service2.png";
import mechanical from "../../../assets/Images/services/mechanical.png";
import Manufacturing from "../../../assets/Images/services/manufacturing.png";
import Energy from "../../../assets/Images/services/energy.png";
import Software from "../../../assets/Images/services/softwar.png";
import Structural from "../../../assets/Images/services/structural.png";
import Technology from "../../../assets/Images/services/technology.png";
import Transport from "../../../assets/Images/markets/transport.png";
import Project1 from "../../../assets/Images/project1.png";
import Project2 from "../../../assets/Images/project2.png";
import Project3 from "../../../assets/Images/project3.png";
import Market from "../../../assets/Images/main5.png";
import { VscSymbolStructure } from "react-icons/vsc";
import { Flex, Card, Typography } from "antd";
import { DefaultOptionType } from "antd/es/select";
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
import { CustomContainer } from "../types";
export const services: DefaultOptionType = {
  id: 1,
  label: "Services",
  icon: (
    <Icons>
      <FaServicestack />
    </Icons>
  ),
  route: "/services",
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
      data: {
        head: "Electical Engineering",
        image: Electrical,
        label: "Engineering & Electrics",
        Icon: <MdElectricBolt />,
      },
      leaders: [
        {
          image: Person,
          name: "A. Brian Lomal",

          designations: "Principal | Director of PEAK Institute",
          location: "Deerfield Beach, Florida",
          occupations: "PE, LEED FELLOW WELL AP",
        },
        {
          image: Person,
          name: "Mark A. Gelfo",

          designations: "Managing Principal",
          location: "Jacksonville, Florida",
          occupations: "PE, CXA, LEED FELLOW, EMP",
        },
        {
          image: Person,
          name: "David V. Miller",

          designations: "Managing Principal | Operations Manager",
          location: "Atlanta, Georgia",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
        {
          image: Person,
          name: "Chad Griffith",

          designations: "Principal | PEAK Institute",
          location: "Melbourne, Florida",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
      ],
      projects: [
        {
          name: "Tampa International Airport (TPA) Curbside Expansion and Central Utility Plant",
          Image: Market,
        },
        {
          name: "North American Portfolio Sustainability Consulting",
          Image: Market,
        },
        {
          name: "JEA Headquarters",
          Image: Market,
        },
        {
          name: "City of Orlando Energy Efficiency Improvements Phases 1 and 2",
          Image: Market,
        },
        {
          name: "Florida Polytechnic University Health and Wellness Audits",
          Image: Market,
        },
        {
          name: "KPMG Lakehouse",
          Image: Market,
        },
        {
          name: "Water Street Central District Cooling Plant",
          Image: Market,
        },
        {
          name: "Lakeland Regional Health Carol Jenkins Barnett Pavilion for Women and Children",
          Image: Market,
        },
        {
          name: "Omni Louisville Hotel and Residences",
          Image: Market,
        },
      ],
      portfolio: {
        image: Electrical,
        label: "Software Development Portfolio Flipbook",
        desc: "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time. Using the latest technologies and structured methodologies, TLC's staff of professionals provides a wide array of energy services. Click here to learn more.",
      },
      intro: {
        intro1:
          "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time.",
        intro2: `Concurrently, improvements in building technology and systems offer solutions not available at the time of design. Energy audits and retro-commissioning, specialties of TLC, are checkups of building health. 
          These reviews range from a simple analysis of energy and water costs and rates to investment grade energy audits that help building owners plan for and implement changes created to protect their asset value. `,
      },
      news: [
        {
          image: Market,
          date: "JANUARY 23, 2024",
          name: "NEWS",
          desc: "TLC Engineering Solutions Announces the Promotion of Justin Mulhollan to Regional Director",
        },
        {
          image: Market,
          date: "DECEMBER 4, 2023",
          name: "NEWS",
          desc: "Cheers to 20+ Years!",
        },
        {
          image: Market,
          date: "NOVEMBER 2, 2023",
          name: "NEWS",
          desc: "Veteran’s Day 2023",
        },
      ],
      routes: "electrical-engineering",
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
      leaders: [
        {
          image: Person,
          name: "A. Brian Lomal",

          designations: "Principal | Director of PEAK Institute",
          location: "Deerfield Beach, Florida",
          occupations: "PE, LEED FELLOW WELL AP",
        },
      ],
      projects: [
        {
          name: "Tampa International Airport (TPA) Curbside Expansion and Central Utility Plant",
          Image: Market,
        },
        {
          name: "North American Portfolio Sustainability Consulting",
          Image: Market,
        },
        {
          name: "JEA Headquarters",
          Image: Market,
        },
        {
          name: "City of Orlando Energy Efficiency Improvements Phases 1 and 2",
          Image: Market,
        },
        {
          name: "Florida Polytechnic University Health and Wellness Audits",
          Image: Market,
        },
        {
          name: "KPMG Lakehouse",
          Image: Market,
        },
        {
          name: "Water Street Central District Cooling Plant",
          Image: Market,
        },
        {
          name: "Lakeland Regional Health Carol Jenkins Barnett Pavilion for Women and Children",
          Image: Market,
        },
        {
          name: "Omni Louisville Hotel and Residences",
          Image: Market,
        },
      ],
      portfolio: {
        image: mechanical,
        label: "Software Development Portfolio Flipbook",
        desc: "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time. Using the latest technologies and structured methodologies, TLC's staff of professionals provides a wide array of energy services. Click here to learn more.",
      },
      news: [
        {
          image: Market,
          date: "JANUARY 23, 2024",
          name: "NEWS",
          desc: "TLC Engineering Solutions Announces the Promotion of Justin Mulhollan to Regional Director",
        },
      ],
      data: {
        head: "Mechanical Engineering",
        image: mechanical,
        label: "Engineering Stability",
        Icon: <VscSymbolStructure />,
      },
      intro: {
        intro1:
          "Withstanding hurricane force winds and seismic events, meeting the unique demands of themed-entertainment rides, or minimizing vibration in research or performing arts centers are all challenges our structural engineers solve.",
        intro2:
          "We analyze the building site and requirements, listen to your expectations and understand the desired aesthetic impact. Armed with that knowledge, we work closely with our owner, architectural and builder partners to create effective structural design solutions. ",
      },
      routes: "mechanical-engineering",
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
      leaders: [
        {
          image: Person,
          name: "A. Brian Lomal",

          designations: "Principal | Director of PEAK Institute",
          location: "Deerfield Beach, Florida",
          occupations: "PE, LEED FELLOW WELL AP",
        },
        {
          image: Person,
          name: "Mark A. Gelfo",

          designations: "Managing Principal",
          location: "Jacksonville, Florida",
          occupations: "PE, CXA, LEED FELLOW, EMP",
        },
        {
          image: Person,
          name: "David V. Miller",

          designations: "Managing Principal | Operations Manager",
          location: "Atlanta, Georgia",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
        {
          image: Person,
          name: "Chad Griffith",

          designations: "Principal | PEAK Institute",
          location: "Melbourne, Florida",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
      ],
      projects: [
        {
          name: "Tampa International Airport (TPA) Curbside Expansion and Central Utility Plant",
          Image: Market,
        },
        {
          name: "North American Portfolio Sustainability Consulting",
          Image: Market,
        },
        {
          name: "JEA Headquarters",
          Image: Market,
        },
        {
          name: "City of Orlando Energy Efficiency Improvements Phases 1 and 2",
          Image: Market,
        },
        {
          name: "Florida Polytechnic University Health and Wellness Audits",
          Image: Market,
        },
        {
          name: "KPMG Lakehouse",
          Image: Market,
        },
        {
          name: "Water Street Central District Cooling Plant",
          Image: Market,
        },
        {
          name: "Lakeland Regional Health Carol Jenkins Barnett Pavilion for Women and Children",
          Image: Market,
        },
        {
          name: "Omni Louisville Hotel and Residences",
          Image: Market,
        },
      ],
      portfolio: {
        image: Structural,
        label: "Structual Engineering Flipbook",
        desc: "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time. Using the latest technologies and structured methodologies, TLC's staff of professionals provides a wide array of energy services. Click here to learn more.",
      },

      news: [
        {
          image: Market,
          date: "JANUARY 23, 2024",
          name: "NEWS",
          desc: "TLC Engineering Solutions Announces the Promotion of Justin Mulhollan to Regional Director",
        },
        {
          image: Market,
          date: "DECEMBER 4, 2023",
          name: "NEWS",
          desc: "Cheers to 20+ Years!",
        },
      ],
      data: {
        head: "Structural Engineering",
        image: Structural,
        label: "Engineering Stability",
        Icon: <VscSymbolStructure />,
      },
      intro: {
        intro1:
          "Withstanding hurricane force winds and seismic events, meeting the unique demands of themed-entertainment rides, or minimizing vibration in research or performing arts centers are all challenges our structural engineers solve.",
        intro2:
          "We analyze the building site and requirements, listen to your expectations and understand the desired aesthetic impact. Armed with that knowledge, we work closely with our owner, architectural and builder partners to create effective structural design solutions. ",
      },
      routes: "structural-engineering",
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
      leaders: [
        {
          image: Person,
          name: "A. Brian Lomal",

          designations: "Principal | Director of PEAK Institute",
          location: "Deerfield Beach, Florida",
          occupations: "PE, LEED FELLOW WELL AP",
        },
        {
          image: Person,
          name: "Mark A. Gelfo",

          designations: "Managing Principal",
          location: "Jacksonville, Florida",
          occupations: "PE, CXA, LEED FELLOW, EMP",
        },
        {
          image: Person,
          name: "David V. Miller",

          designations: "Managing Principal | Operations Manager",
          location: "Atlanta, Georgia",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
        {
          image: Person,
          name: "Chad Griffith",

          designations: "Principal | PEAK Institute",
          location: "Melbourne, Florida",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
      ],
      projects: [
        {
          name: "Tampa International Airport (TPA) Curbside Expansion and Central Utility Plant",
          Image: Market,
        },
        {
          name: "North American Portfolio Sustainability Consulting",
          Image: Market,
        },
        {
          name: "JEA Headquarters",
          Image: Market,
        },
        {
          name: "City of Orlando Energy Efficiency Improvements Phases 1 and 2",
          Image: Market,
        },
        {
          name: "Florida Polytechnic University Health and Wellness Audits",
          Image: Market,
        },
        {
          name: "KPMG Lakehouse",
          Image: Market,
        },
        {
          name: "Water Street Central District Cooling Plant",
          Image: Market,
        },
        {
          name: "Lakeland Regional Health Carol Jenkins Barnett Pavilion for Women and Children",
          Image: Market,
        },
        {
          name: "Omni Louisville Hotel and Residences",
          Image: Market,
        },
      ],
      portfolio: {
        image: Software,
        label: "Software Development Portfolio Flipbook",
        desc: "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time. Using the latest technologies and structured methodologies, TLC's staff of professionals provides a wide array of energy services. Click here to learn more.",
      },
      intro: {
        intro1:
          "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time.",
        intro2: `Concurrently, improvements in building technology and systems offer solutions not available at the time of design. Energy audits and retro-commissioning, specialties of TLC, are checkups of building health. 
          These reviews range from a simple analysis of energy and water costs and rates to investment grade energy audits that help building owners plan for and implement changes created to protect their asset value. `,
      },
      news: [
        {
          image: Market,
          date: "JANUARY 23, 2024",
          name: "NEWS",
          desc: "TLC Engineering Solutions Announces the Promotion of Justin Mulhollan to Regional Director",
        },
        {
          image: Market,
          date: "DECEMBER 4, 2023",
          name: "NEWS",
          desc: "Cheers to 20+ Years!",
        },
        {
          image: Market,
          date: "NOVEMBER 2, 2023",
          name: "NEWS",
          desc: "Veteran’s Day 2023",
        },
      ],
      data: {
        head: "Software Development",
        image: Software,
        label: "Computer Software Engineering",

        Icon: <SiBmcsoftware />,
      },
      routes: "software-development",
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
      leaders: [
        {
          image: Person,
          name: "A. Brian Lomal",

          designations: "Principal | Director of PEAK Institute",
          location: "Deerfield Beach, Florida",
          occupations: "PE, LEED FELLOW WELL AP",
        },
        {
          image: Person,
          name: "Mark A. Gelfo",

          designations: "Managing Principal",
          location: "Jacksonville, Florida",
          occupations: "PE, CXA, LEED FELLOW, EMP",
        },
        {
          image: Person,
          name: "David V. Miller",

          designations: "Managing Principal | Operations Manager",
          location: "Atlanta, Georgia",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
        {
          image: Person,
          name: "Chad Griffith",

          designations: "Principal | PEAK Institute",
          location: "Melbourne, Florida",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
      ],
      projects: [
        {
          name: "Tampa International Airport (TPA) Curbside Expansion and Central Utility Plant",
          Image: Market,
        },
        {
          name: "North American Portfolio Sustainability Consulting",
          Image: Market,
        },
        {
          name: "JEA Headquarters",
          Image: Market,
        },
        {
          name: "City of Orlando Energy Efficiency Improvements Phases 1 and 2",
          Image: Market,
        },
        {
          name: "Florida Polytechnic University Health and Wellness Audits",
          Image: Market,
        },
        {
          name: "KPMG Lakehouse",
          Image: Market,
        },
        {
          name: "Water Street Central District Cooling Plant",
          Image: Market,
        },
        {
          name: "Lakeland Regional Health Carol Jenkins Barnett Pavilion for Women and Children",
          Image: Market,
        },
        {
          name: "Omni Louisville Hotel and Residences",
          Image: Market,
        },
      ],
      portfolio: {
        image: Energy,
        label: "Energy Services Portfolio Flipbook",
        desc: "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time. Using the latest technologies and structured methodologies, TLC's staff of professionals provides a wide array of energy services. Click here to learn more.",
      },
      intro: {
        intro1:
          "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time.",
        intro2: `Concurrently, improvements in building technology and systems offer solutions not available at the time of design. Energy audits and retro-commissioning, specialties of TLC, are checkups of building health. 
          These reviews range from a simple analysis of energy and water costs and rates to investment grade energy audits that help building owners plan for and implement changes created to protect their asset value. `,
      },
      news: [
        {
          image: Market,
          date: "JANUARY 23, 2024",
          name: "NEWS",
          desc: "TLC Engineering Solutions Announces the Promotion of Justin Mulhollan to Regional Director",
        },
        {
          image: Market,
          date: "DECEMBER 4, 2023",
          name: "NEWS",
          desc: "Cheers to 20+ Years!",
        },
        {
          image: Market,
          date: "NOVEMBER 2, 2023",
          name: "NEWS",
          desc: "Veteran’s Day 2023",
        },
      ],
      data: {
        head: "Energy Services",
        image: Energy,
        label: "Getting the Best Performance from Your Facility",
        Icon: <FaRegLightbulb />,
      },
      routes: "energy-services",
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
      leaders: [
        {
          name: "Taw North",
          Image: Structural,
          occupations: "RCDD, LEED AP",
          location: "Orilando, Florida",
          designations: "Principal | Regional Operations Director",
          image: Market,
        },
        {
          name: "Aaron Rose",
          Image: Structural,
          occupations: "RCDD, RTPM",
          location: "Fort Worth, Texas",
          designations: "Managing Principal | Operations Manager",
          image: Market,
        },
        {
          name: "J.D Loring",
          Image: Structural,
          //occupations: "RCDD, RTPM",
          location: "Tampa, Florida",
          designations: "Eastern Region Market Development",
          image: Market,
        },
        {
          name: "Ellen Hauser",
          Image: Structural,
          //occupations: "RCDD, RTPM",
          location: "Los Angles, California",
          designations: "Business Development Representative",
          image: Market,
        },
      ],
      projects: [
        {
          name: "Winter Park Library and Events Center",
          Image: Market,
        },
        {
          name: "BRO Passenger TerminalImage Courtesy: Corgan Brownsville/South Padre International Airport (BRO) New Passenger Terminal",
          Image: Market,
        },
        {
          name: "Taneja Center for Surgery at AdventHealth Tampa",
          Image: Market,
        },
        {
          name: "PHX Terminal 4 S1 ConcourseImage Courtesy: Corgan Phoenix Sky Harbor International Airport (PHX) Terminal 4 S1 Concourse",
          Image: Market,
        },
        {
          name: "Electronic Arts",
          Image: Market,
        },
        {
          name: "DFW Department of Public Safety Dallas/Fort Worth International Airport (DFW) Department of Public Safety Headquarters Building",
          Image: Market,
        },
        {
          name: "DFW Integrated Operations Center",
          Image: Market,
        },
        {
          name: "AdventHealth Orlando Command Center",
          Image: Market,
        },
      ],
      news: [
        {
          image: Market,
          date: "JANUARY 23, 2024",
          name: "NEWS",
          desc: "TLC Engineering Solutions Announces the Promotion of Justin Mulhollan to Regional Director",
        },
        {
          image: Market,
          date: "DECEMBER 4, 2023",
          name: "NEWS",
          desc: "Cheers to 20+ Years!",
        },
        {
          image: Market,
          date: "NOVEMBER 2, 2023",
          name: "NEWS",
          desc: "Veteran’s Day 2023",
        },
      ],
      intro: {
        intro1:
          "it’s simple—leveraging technological advancements maximizes the return of your building investment..",
        intro2: `From highly specialized systems that protect lives in medical facilities to corporate offices requiring productive work environments to education facilities that foster students, technology in buildings makes our lives richer, more productive and buildings more efficient to operate. 
          Seamless integration of AV, data, security systems and highly specialized systems provide benefits today, as well as the ability to expand and enhance the future—a specialty of our technology staff members. They consider all the possibilities of today and tomorrow to deliver the solutions appropriate to your project. `,
      },
      portfolio: {
        image: Technology,
        label: "Technology Portfolio Flipbook",
        desc: "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time. Using the latest technologies and structured methodologies, TLC's staff of professionals provides a wide array of energy services. Click here to learn more.",
      },
      data: {
        head: "Technology",
        image: Technology,
        label: "21st Century Solutions Today and Planning for Tomorrow",
        Icon: <IoWifiOutline />,
      },
      routes: "technology",
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
      intro: {
        intro1:
          "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time.",
        intro2: `Concurrently, improvements in building technology and systems offer solutions not available at the time of design. Energy audits and retro-commissioning, specialties of TLC, are checkups of building health. 
          These reviews range from a simple analysis of energy and water costs and rates to investment grade energy audits that help building owners plan for and implement changes created to protect their asset value. `,
      },
      leaders: [
        {
          image: Person,
          name: "A. Brian Lomal",

          designations: "Principal | Director of PEAK Institute",
          location: "Deerfield Beach, Florida",
          occupations: "PE, LEED FELLOW WELL AP",
        },
        {
          image: Person,
          name: "Mark A. Gelfo",

          designations: "Managing Principal",
          location: "Jacksonville, Florida",
          occupations: "PE, CXA, LEED FELLOW, EMP",
        },
        {
          image: Person,
          name: "David V. Miller",

          designations: "Managing Principal | Operations Manager",
          location: "Atlanta, Georgia",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
        {
          image: Person,
          name: "Chad Griffith",

          designations: "Principal | PEAK Institute",
          location: "Melbourne, Florida",
          occupations: "PE, CXA, LEED AP BD+C, EMP",
        },
      ],
      projects: [
        {
          name: "Tampa International Airport (TPA) Curbside Expansion and Central Utility Plant",
          Image: Market,
        },
        {
          name: "North American Portfolio Sustainability Consulting",
          Image: Market,
        },
        {
          name: "JEA Headquarters",
          Image: Market,
        },
        {
          name: "City of Orlando Energy Efficiency Improvements Phases 1 and 2",
          Image: Market,
        },
        {
          name: "Florida Polytechnic University Health and Wellness Audits",
          Image: Market,
        },
        {
          name: "KPMG Lakehouse",
          Image: Market,
        },
        {
          name: "Water Street Central District Cooling Plant",
          Image: Market,
        },
        {
          name: "Lakeland Regional Health Carol Jenkins Barnett Pavilion for Women and Children",
          Image: Market,
        },
        {
          name: "Omni Louisville Hotel and Residences",
          Image: Market,
        },
      ],
      portfolio: {
        image: Manufacturing,
        label: "Manufacturing Portfolio Flipbook",
        desc: "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time. Using the latest technologies and structured methodologies, TLC's staff of professionals provides a wide array of energy services. Click here to learn more.",
      },
      data: {
        head: "Manufacturing",
        image: Manufacturing,
        label: "Manufacturing Plumbing & Engineering",
        Icon: <VscSymbolStructure />,
      },
      routes: "manufacturing",
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

  route: "/services",
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
export const people: DefaultOptionType = {
  id: 3,
  label: "People",
  icon: (
    <Icons>
      <IoIosPeople />
    </Icons>
  ),
  route: "/services",
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
  route: "/services",

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
  route: "/services",
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

export const marketData: CustomContainer = {
  image: Market,
  mainLabel: "Market",
  description: "We’ve got experience in a wide variety of industries.",
  headData: {
    label: "FEATURED MARKET",
    subHeading: "Aviation",
    headImage: Market,
    headDescription:
      "Terminals operate 24/7, requiring building systems that provide for traveler comfort and security, while also striving for sustainability.",
  },

  services: [
    {
      id: "11",
      label: "Transportation",
      serviceImage: Transport,
      headDescription: "Travel safety is more important than ever.",
    },
    {
      id: "12",
      label: "Education",
      serviceImage: Education,
      headDescription:
        "Energy efficiency, robust technology availability and appropriate security measures are priorities for education providers.",
    },
    {
      id: "13",
      label: "Entertainment",
      serviceImage: Entertainment,
      headDescription:
        "Facilities that help celebrate art and cultures are more valuable than ever.",
    },
    {
      id: "14",
      label: "Government",
      serviceImage: Government,
      headDescription:
        "MEDEBER understands the unique services that governmental agencies require from continuing services contracts to major complex buildings.",
    },
    {
      id: "15",
      label: "Healthcare",
      serviceImage: Healthcare,
      headDescription:
        "MEDEBER is a nationally recognized engineering firm that has specialized in providing healthcare solutions since 1955.",
    },
    {
      id: "16",
      label: "Commercial",
      serviceImage: Commercial,
      headDescription: "Engineering places to live, work, and enjoy!",
    },
  ],
};

export const servicesData: CustomContainer = {
  image: Services,
  mainLabel: "Services",
  description:
    "Explore our services to see how MEDEBER can make your next project successful.",
  headData: {
    label: "FEATURED SERVICE",
    subHeading: "Mechanical, Electrical, Plumbing",
    headImage: Service2,
    headDescription:
      "A quality building environment combines the right solutions of thermal comfort, air quality, lighting, water and gases delivered where and when needed and safely transported away.",
  },

  services: [
    {
      id: "1",
      label: "Electrical Engineering",
      serviceImage: Electrical,
      headDescription:
        "Withstanding hurricane force winds and seismic events, meeting the unique demands of themed-entertainment rides, or minimizing vibration in research or performing arts centers are all challenges our structural engineers solve.",
    },
    {
      id: "2",
      label: "Mechanical Engineering",
      serviceImage: mechanical,
      headDescription:
        "Withstanding hurricane force winds and seismic events, meeting the unique demands of themed-entertainment rides, or minimizing vibration in research or performing arts centers are all challenges our structural engineers solve.",
    },
    {
      id: "3",
      label: "Structural Engineering",
      serviceImage: Structural,
      headDescription:
        "Withstanding hurricane force winds and seismic events, meeting the unique demands of themed-entertainment rides, or minimizing vibration in research or performing arts centers are all challenges our structural engineers solve.",
    },
    {
      id: "4",
      label: "Software Development",
      serviceImage: Software,
      headDescription:
        "Increasingly complex building systems and aggressive construction schedules make new building commissioning one of the best investments an owner can make.",
    },
    {
      id: "5",
      label: "Energy Services",
      serviceImage: Energy,
      headDescription:
        "From the moment a building is completed, it begins to change. Internal and external changes result in energy and water efficiency degrading over time.",
    },

    {
      id: "6",
      label: "Technology",
      serviceImage: Technology,
      headDescription:
        "It’s simple—leveraging technological advancements maximizes the return of your building investment.",
    },

    {
      id: "7",
      label: "Manufacturing",
      serviceImage: Manufacturing,
      headDescription: "Engineering places to live, work, and enjoy!",
    },
  ],
};

export const testimonial = [
  {
    name: "Structural Engineering",
    Image: Market,
    desc: "This is the description",
  },
  {
    name: "Structural Engineering",
    Image: Market,
    desc: "This is the description",
  },
  {
    name: "Structural Engineering",
    Image: Market,
    desc: "This is the description",
  },
];
/////////////////////

export const expertiseData: CustomContainer = {
  image: Experts,
  mainLabel: "EXPERTISE",
  description: "We’ve got experience in a wide variety of industries.",
  headData: {
    label: "FEATURED EXPERTISE",
    subHeading: "High Performance Design / Energy Modeling",
    headImage: Expertise,
    headDescription:
      "Regardless of the building owner’s goal—achieving certification on a third-party rating scale, assuring operational efficiency to maintain financial stability or a commitment to environmental stewardship—TLC Engineering Solutions delivers on high-performance designs..",
  },

  services: [
    {
      id: "11",
      label: "Historic Preservation",
      serviceImage: History,
      headDescription:
        "Renovation is often more challenging than new construction. And when the building has historic significance, the challenges and approvals often multiply, as does the reward.",
    },

    {
      id: "12",
      label: "Sustainable Building",
      serviceImage: Sustainable,
      headDescription:
        "More than 15 years ago, TLC Engineering helped achieve the first LEED-certified building in Florida.",
    },

    {
      id: "13",
      label: "Master Planning",
      serviceImage: Planning,
      headDescription:
        "Master plans for the long term, whether for a greenfield or congested urban site, set the stage for success.",
    },

    {
      id: "14",
      label: "On Call, Disaster Preparedness & Recovery, and Resiliency",
      serviceImage: Disaster,
      headDescription:
        "MEDEBER Engineering Solutions designs with resiliency in mind.",
    },

    {
      id: "15",
      label: "Manufacturing | Distribution | Industrial Process",
      serviceImage: Distribution,
      headDescription:
        "Our goal is to maximize efficiency while ensuring redundancy in these highly complex facilities.",
    },

    {
      id: "16",
      label: "Smart Buildings",
      serviceImage: Building,
      headDescription:
        "As system designers at TLC, we’re incorporating numerous building technologies into our designs as they become network capable, giving building owners the benefit of better building management.",
    },

    {
      id: "17",
      label: "Infrastructure / Central Energy Plants",
      serviceImage: Commercial,
      headDescription:
        "Real estate developments, corporate, education and health care campuses, and many types of building benefit from efficient centralized energy plants and planned infrastructure across the proposed or existing development.",
    },
  ],
};
