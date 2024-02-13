import {
  Flex,
  theme,
  Carousel,
  Typography,
  Divider,
  ConfigProvider,
  CarouselProps,
} from "antd";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { projectData } from "../../utills/data";
import { useState } from "react";
const FeaturedProjects = () => {
  const { token } = theme.useToken();
  const [activeProject, setActiveProject] = useState({ ...projectData[0] });
  const [activeProjectIndex, setActiveProjectIndex] = useState(1);
  const onForwardClicked = () => {
    const activeIndex = projectData.findIndex(
      (active) => active.id === activeProject.id
    );
    if (activeIndex !== -1) {
      if (activeIndex < projectData.length - 1) {
        setActiveProject(projectData[activeIndex + 1]);
        setActiveProjectIndex((index) => index + 1);
      } else {
        setActiveProject(projectData[0]);
        setActiveProjectIndex(1);
      }
    }
  };
  const onBackwordClicked = () => {
    const activeIndex = projectData.findIndex(
      (active) => active.id === activeProject.id
    );
    if (activeIndex !== -1) {
      if (activeIndex > 0) {
        setActiveProject(projectData[activeIndex - 1]);
        setActiveProjectIndex((index) => index - 1);
      } else {
        setActiveProject(projectData[projectData.length - 1]);
        setActiveProjectIndex(projectData.length);
      }
    }
  };
  const onCrousalChange: CarouselProps["afterChange"] = (index: number) => {
    setActiveProjectIndex(index + 1);
    setActiveProject(projectData[index]);
  };
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        padding: token.paddingXS,
        paddingTop: "100px",
        paddingBottom: "100px",
        width: "100%",
        background:
          "linear-gradient(to bottom,gray 0%,gray 20%,white 50%,white 80%,grey 90%,gray 100%)",
      }}
      className="select-none xs:max-md:flex-col"
    >
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
        }}
        className="xs:max-md:w-full w-[50%]"
      >
        <Flex
          flex="1"
          justify="space-between"
          style={{ padding: token.paddingSM }}
        >
          <Flex align="center">
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading2,
                fontWeight: token.fontWeightStrong,
              }}
            >
              Featured Projects
            </Typography.Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            className="hover:opacity-[0.8]"
            style={{
              padding: token.paddingSM,
              boxShadow: "rgba(149, 157, 165, 0.6) 0px 0px 18px",
              background: "#fff",
            }}
          >
            <IoMdArrowRoundForward size={30} onClick={onForwardClicked} />
          </Flex>
        </Flex>
        <div style={{ width: "100%" }}>
          <Carousel
            autoplay
            autoplaySpeed={4000}
            dots={false}
            style={{ height: "300px" }}
            afterChange={onCrousalChange}
          >
            {projectData.map((project) => (
              <div
                key={project.id}
                style={{
                  padding: token.paddingSM,
                  background: "red",
                  float: "right",
                }}
              >
                <img
                  src={project.image}
                  style={{
                    width: "100%",
                    height: "300px",
                    display: "flex",
                    justifySelf: "flex-end",
                    paddingInline: token.paddingSM,
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <Flex justify="flex-end" style={{ padding: token.paddingSM }}>
          <Flex
            justify="center"
            align="center"
            className="hover:opacity-[0.8]"
            style={{
              padding: token.paddingSM,
              boxShadow: "rgba(149, 157, 165, 0.6) 0px 0px 18px",
            }}
          >
            <IoMdArrowRoundBack size={30} onClick={onBackwordClicked} />
          </Flex>
        </Flex>
      </div>
      <Divider type="vertical" className="h-full" />
      <Flex flex="1" vertical>
        <Flex style={{ padding: token.paddingSM }}>
          <Typography.Text
            style={{
              fontWeight: "bold",
              fontSize: token.fontSizeHeading2,
              textAlign: "center",
            }}
          >
            We’re committed to engineering facilities that benefit the people
            who live, work, study and play in them.
          </Typography.Text>
        </Flex>
        <Flex>
          <Flex
            flex="1"
            style={{ padding: token.paddingSM, height: "fit-content" }}
            justify="space-between"
            align="flex-end"
          >
            <Typography.Text
              style={{
                color: "grey",
                fontWeight: token.fontWeightStrong,
              }}
            >
              {activeProjectIndex} of {projectData.length}
            </Typography.Text>
            <Flex
              gap="small"
              align="center"
              style={{ height: "fit-content" }}
              className="hover:underline"
            >
              <Typography.Text
                style={{
                  color: "grey",
                  cursor: "pointer",
                  fontSize: token.fontSizeHeading5,
                }}
              >
                See all {projectData.length} Projects
              </Typography.Text>
              <IoMdArrowRoundForward style={{ color: "grey" }} />
            </Flex>
          </Flex>
        </Flex>
        <ConfigProvider
          theme={{
            components: {
              Divider: {
                marginLG: 0,
              },
            },
          }}
        >
          <Divider />
        </ConfigProvider>
        <Flex
          flex="1"
          style={{ padding: token.paddingSM }}
          vertical
          gap="small"
        >
          <Flex flex="1" justify="center" style={{ height: "fit-content" }}>
            <Typography.Text
              className="animate-debounce"
              style={{
                textAlign: "center",
                fontSize: token.fontSizeHeading4,
                fontWeight: token.fontWeightStrong,
              }}
            >
              {activeProject.name}
            </Typography.Text>
          </Flex>
          <Flex flex="1" justify="center" style={{ height: "fit-content" }}>
            <Typography.Text
              style={{
                textAlign: "center",
                fontSize: token.fontSizeHeading5,
                color: "gray",
              }}
            >
              {activeProject.desc}
            </Typography.Text>
          </Flex>
          <Flex
            flex="1"
            justify="space-between"
            style={{ height: "fit-content" }}
          >
            <Typography.Text
              style={{
                textAlign: "center",
                fontSize: token.fontSizeHeading5,
                fontWeight: token.fontWeightStrong,
              }}
            >
              PHOENIX, AZ
            </Typography.Text>
            <Typography.Text
              style={{
                textAlign: "center",
                fontSize: token.fontSizeHeading5,
                fontWeight: token.fontWeightStrong,
              }}
            >
              275,000 SQ,FT
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default FeaturedProjects;
