import { Flex, Typography, theme } from "antd";
import CustomPortfolioCard from "../../custom-portfolio-card";

import { IoMdArrowRoundForward } from "react-icons/io";
export interface CustomPortfolioProps {
  label: string | undefined;
  desc: string | undefined;
  image: string | undefined;
}
const CustomPortfolio: React.FC<CustomPortfolioProps> = ({
  label,
  desc,
  image,
}) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex={1}
      className="w-full pt-[100px] "
      justify="center"
      align="center"
      vertical
      gap="small"
      style={{ boxSizing: "content-box" }}
    >
      <Flex
        className="sm:w-[95%] pb-[50px]"
        style={{ padding: token.paddingSM, boxSizing: "content-box" }}
      >
        <CustomPortfolioCard
          data={{
            id: "1",
            serviceImage: image!,
            headDescription: desc!,
            label: label!,
          }}
        />
      </Flex>
      <Flex
        className="w-full pt-[50px] pb-[50px] bg-primary"
        justify="center"
        align="center"
      >
        <Flex vertical style={{ padding: token.paddingLG }}>
          <Flex className="select-none">
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading1,
                fontWeight: token.fontWeightStrong,
                color: "#efc75e",
                textAlign: "center",
              }}
            >
              View Our Portfolio.
            </Typography.Text>
          </Flex>
          <Flex
            justify="center"
            gap="small"
            align="center"
            className="select-none"
          >
            <Typography.Text
              className="hover:underline"
              style={{
                fontSize: token.fontSizeHeading3,
                fontWeight: token.fontWeightStrong,
                color: "#fff",
              }}
            >
              Explore our work
            </Typography.Text>
            <IoMdArrowRoundForward className="fill-white" size="30" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomPortfolio;
