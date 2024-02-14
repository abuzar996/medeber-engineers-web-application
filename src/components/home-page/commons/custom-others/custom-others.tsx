import { Flex, Typography, theme } from "antd";
import Img1 from "../../../../assets/Images/services/electrical.png";
import Img2 from "../../../../assets/Images/services/softwar.png";
import Img3 from "../../../../assets/Images/services/technology.png";
import Img4 from "../../../../assets/Images/services/mechanical.png";
import Img5 from "../../../../assets/Images/services/manufacturing.png";
import Img6 from "../../../../assets/Images/services/energy.png";
import { useState } from "react";
const CustomOthers = () => {
  const { token } = theme.useToken();
  const [eeImage, setEeImage] = useState(false);
  const [seImage, setSeImage] = useState(false);
  const [tImage, setTImage] = useState(false);
  const [meImage, setMeImage] = useState(false);
  const [mImage, setMImage] = useState(false);
  const [eImage, setEImage] = useState(false);
  return (
    <Flex className="w-full justify-center pt-[100px] pb-[100px]">
      <Flex
        className="sm:max-w-[95%] min-h-[300px] xs:max-sm:flex-col"
        flex="1"
        style={{
          border: "2px solid #efce75",
          backgroundImage: `linear-gradient(to right,  #3b82f6 ,#1b1247)`,
        }}
      >
        <Flex
          flex="1"
          justify="center"
          align="center"
          style={{
            padding: token.paddingSM,
            borderRight: "2px solid #efce75",
          }}
          className="select-none"
        >
          <Typography.Text
            style={{
              fontSize: token.fontSizeHeading2,
              fontStyle: "italic",
              fontWeight: "lighter",
              color: "#efc75e",
            }}
          >
            Our Other Services
          </Typography.Text>
        </Flex>
        <Flex
          flex="3"
          style={{ flexWrap: "wrap" }}
          className="xs:max-md:flex-col"
        >
          <Flex flex="1" vertical>
            <Flex
              flex={1}
              justify="center"
              align="center"
              style={{
                border: "1px solid #efc75e",
                backgroundImage: eeImage ? `url(${Img1})` : "",
              }}
              className={` select-none text-center text-[#efc75e] hover:text-white `}
              onMouseEnter={() => {
                setEeImage(true);
              }}
              onMouseLeave={() => setEeImage(false)}
            >
              <Typography.Text
                style={{
                  fontWeight: token.fontWeightStrong,
                  fontSize: token.fontSizeHeading4,
                  color: "inherit",
                }}
              >
                Electrical Enginering
              </Typography.Text>
            </Flex>
            <Flex
              flex={1}
              justify="center"
              align="center"
              style={{
                border: "1px solid #efc75e",
                backgroundImage: meImage ? `url(${Img4})` : "",
              }}
              className={`select-none text-center text-[#efc75e] hover:text-white bg-transparent `}
              onMouseEnter={() => {
                setMeImage(true);
              }}
              onMouseLeave={() => setMeImage(false)}
            >
              <Typography.Text
                style={{
                  fontWeight: token.fontWeightStrong,
                  fontSize: token.fontSizeHeading4,
                  color: "inherit",
                }}
              >
                Mechanical Enginering
              </Typography.Text>
            </Flex>
          </Flex>
          <Flex flex="1" vertical>
            <Flex
              flex={1}
              justify="center"
              align="center"
              style={{
                border: "1px solid #efc75e",
                backgroundImage: seImage ? `url(${Img2})` : "",
              }}
              className={` select-none text-center text-[#efc75e] hover:text-white bg-transparent `}
              onMouseEnter={() => {
                setSeImage(true);
              }}
              onMouseLeave={() => setSeImage(false)}
            >
              <Typography.Text
                style={{
                  fontWeight: token.fontWeightStrong,
                  fontSize: token.fontSizeHeading4,
                  color: "inherit",
                }}
              >
                Software Development
              </Typography.Text>
            </Flex>
            <Flex
              flex={1}
              justify="center"
              align="center"
              style={{
                border: "1px solid #efc75e",
                background: eImage ? `url(${Img6})` : "",
              }}
              className={`  text-[#efc75e] text-center hover:text-white bg-transparent `}
              onMouseEnter={() => {
                setEImage(true);
              }}
              onMouseLeave={() => setEImage(false)}
            >
              <Typography.Text
                style={{
                  fontWeight: token.fontWeightStrong,
                  fontSize: token.fontSizeHeading4,
                  color: "inherit",
                }}
              >
                Energy Services
              </Typography.Text>
            </Flex>
          </Flex>
          <Flex flex="1" vertical>
            <Flex
              flex={1}
              justify="center"
              align="center"
              style={{
                border: "1px solid #efc75e",
                backgroundImage: tImage ? `url(${Img3})` : "",
              }}
              className={` select-none text-center text-[#efc75e] hover:text-white bg-transparent `}
              onMouseEnter={() => {
                setTImage(true);
              }}
              onMouseLeave={() => setTImage(false)}
            >
              <Typography.Text
                style={{
                  fontWeight: token.fontWeightStrong,
                  fontSize: token.fontSizeHeading4,
                  color: "inherit",
                }}
              >
                Technology
              </Typography.Text>
            </Flex>
            <Flex
              flex={1}
              justify="center"
              align="center"
              style={{
                border: "1px solid #efc75e",
                backgroundImage: mImage ? `url(${Img5})` : "",
              }}
              className={`select-none text-center text-[#efc75e] hover:text-white bg-transparent `}
              onMouseEnter={() => {
                setMImage(true);
              }}
              onMouseLeave={() => setMImage(false)}
            >
              <Typography.Text
                style={{
                  fontWeight: token.fontWeightStrong,
                  fontSize: token.fontSizeHeading4,
                  color: "inherit",
                }}
              >
                Manufacturing
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomOthers;
