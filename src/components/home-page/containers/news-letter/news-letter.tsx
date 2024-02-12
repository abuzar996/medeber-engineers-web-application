import { Flex, Typography, theme } from "antd";
import NewsModal from "./newsModal";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useState } from "react";
const NewsLetter = () => {
  const { token } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onDialogueClick = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };
  return (
    <>
      {isModalOpen && <NewsModal setIsOpen={setIsModalOpen} />}
      <Flex
        style={{
          padding: token.paddingSM,
          height: "100px",
          //background: "linear-gradient(#fff, #3b82f6)",
        }}
        justify="center"
      >
        <Flex
          style={{
            background: token.colorBgBase,
            padding: token.paddingSM,
            borderRadius: token.borderRadiusLG,

            backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
          }}
          className="w-[90%] cursor-pointer select-none"
          justify="center"
          onClick={onDialogueClick}
        >
          <Flex
            className="w-[90%] hover:opacity-[0.8]"
            justify="space-between"
            align="center"
          >
            <Flex>
              <Typography.Text
                style={{
                  fontWeight: token.fontWeightStrong,
                  fontSize: token.fontSizeHeading3,
                  color: "#efc75e",
                }}
              >
                Stay in the loop. Sign up for our newsletter.
              </Typography.Text>
            </Flex>
            <Flex>
              <IoMdArrowRoundForward size="25" className="fill-[#efc75e]" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default NewsLetter;
