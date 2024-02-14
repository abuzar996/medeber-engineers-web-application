import { Flex, theme } from "antd";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import "../../layout/scroll.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useRef, useState } from "react";

interface CustomSliderProps {
  type: boolean | "news" | "info";
  data: { name: string; Image: string; desc?: string }[];
  Child: React.FC<
    | {
        type: boolean | "news" | "info";
        projectName: string;
        image: string;
        desc?: string;
      }
    | {
        type: boolean | "info" | "news";
        projectName?: string;
        name?: string;
        image: string;
        date?: string;
        desc?: string;
        designations?: string;
        location?: string;
        occupations?: string;
      }
  >;
}
const CustomSlider: React.FC<CustomSliderProps> = ({ type, Child, data }) => {
  const flexRef = useRef<HTMLInputElement>(null);
  const { token } = theme.useToken();
  const [left, setLeft] = useState(0);
  const [current, setCurrent] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNextClick = () => {
    setLeft((left) => left + 30);
    if (flexRef.current) {
      flexRef.current.scrollTo({ left });
    }
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    setActiveIndex(page - 1);
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
        border: length > 2 ? "2px solid #efc753" : "",
        borderRadius: token.borderRadiusLG,
        background: "transparent",
      }}
    >
      {data.length > 2 && (
        <Flex
          style={{
            padding: token.paddingSM,
            border: "1px solid #efc753",
            borderTopLeftRadius: token.borderRadiusLG,
            borderBottomLeftRadius: token.borderRadiusLG,
            backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
          }}
          className="h-full select-none xs:max-sm:hidden"
          align="center"
          flex="1"
        >
          <GrPrevious
            size="30"
            className="text-[#efc75e]"
            onClick={handlePreviousClicked}
          />
        </Flex>
      )}
      <Flex>
        <Flex
          ref={flexRef}
          className="select-none max-w-[calc(100vw_-_200px)] overflow-x-auto scroll-smooth xs:max-sm:w-screen box-content xs:max-sm:hidden"
          id="element"
          align="center"
          gap="large"
        >
          {data &&
            data.map((d, index) => (
              <Flex
                key={index}
                className="sm:max-w-[450px] sm:min-w-[450px] h-full"
                flex="1"
              >
                <Child
                  type={type}
                  projectName={d.name}
                  image={d.Image}
                  desc={d.desc ? d.desc : ""}
                />
              </Flex>
            ))}
        </Flex>
      </Flex>
      {data.length > 2 && (
        <Flex
          style={{
            padding: token.paddingSM,
            border: "1px solid #efc753",
            borderTopRightRadius: token.borderRadiusLG,
            borderBottomRightRadius: token.borderRadiusLG,

            backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
          }}
          className="h-full xs:max-sm:hidden"
          align="center"
          flex="1"
        >
          <GrNext
            size="30"
            className="text-[#efc75e]"
            onClick={handleNextClick}
          />
        </Flex>
      )}
      <Flex className="sm:hidden" vertical flex="1">
        <Child
          type={type}
          name={data[activeIndex].name}
          image={data[activeIndex].Image}
          desc={data[activeIndex].desc}
        />
        <Flex className="w-[100%] " style={{ padding: token.paddingXS }}>
          <Pagination
            size="small"
            current={current}
            onChange={onChange}
            total={data.length}
            responsive={true}
            defaultPageSize={1}
            pageSize={1}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomSlider;
