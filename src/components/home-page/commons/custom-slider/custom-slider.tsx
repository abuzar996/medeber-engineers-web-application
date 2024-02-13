import CustomProjectCard from "../custom-project-card";
import { Flex, theme } from "antd";
import "../../layout/scroll.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useRef, useState } from "react";
const CustomSlider = () => {
  const flexRef = useRef<HTMLInputElement>(null);
  const { token } = theme.useToken();
  const [left, setLeft] = useState(0);

  const handleNextClick = () => {
    setLeft((left) => left + 30);
    if (flexRef.current) {
      flexRef.current.scrollTo({ left });
    }
  };

  const handlePreviousClicked = () => {
    setLeft((left) => left - 30);
    if (flexRef.current) {
      flexRef.current.scrollTo({ left });
    }
  };
  return (
    <Flex
      align="center"
      style={{
        border: "2px solid #efc753",
        borderRadius: token.borderRadiusLG,
        background: "transparent",
      }}
    >
      <Flex
        style={{
          padding: token.paddingSM,
          border: "1px solid #efc753",
          borderTopLeftRadius: token.borderRadiusLG,
          borderBottomLeftRadius: token.borderRadiusLG,
          backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
        }}
        className="h-full select-none"
        align="center"
        flex="1"
      >
        <GrPrevious
          size="30"
          className="text-[#efc75e]"
          onClick={handlePreviousClicked}
        />
      </Flex>
      <Flex>
        <Flex
          ref={flexRef}
          className="select-none"
          id="element"
          style={{
            width: "calc(100vw - 200px)",

            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
          align="center"
          gap="large"
        >
          <Flex style={{ minWidth: "450px" }}>
            <CustomProjectCard type={false} />
          </Flex>
          <Flex style={{ minWidth: "450px" }}>
            <CustomProjectCard type={false} />
          </Flex>
          <Flex style={{ minWidth: "450px" }}>
            <CustomProjectCard type={false} />
          </Flex>
          <Flex style={{ minWidth: "450px" }}>
            <CustomProjectCard type={false} />
          </Flex>
          <Flex style={{ minWidth: "450px" }}>
            <CustomProjectCard type={false} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        style={{
          padding: token.paddingSM,
          border: "1px solid #efc753",
          borderTopRightRadius: token.borderRadiusLG,
          borderBottomRightRadius: token.borderRadiusLG,
          backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
        }}
        className="h-full"
        align="center"
        flex="1"
      >
        <GrNext
          size="30"
          className="text-[#efc75e]"
          onClick={handleNextClick}
        />
      </Flex>
    </Flex>
  );
};

export default CustomSlider;
