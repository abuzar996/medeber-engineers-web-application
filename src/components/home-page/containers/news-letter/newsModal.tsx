import { Modal, Flex, theme, Typography, Input, Button } from "antd";
import { IoMdCloseCircleOutline } from "react-icons/io";
interface ModalProps {
  setIsOpen: (val: boolean) => void;
}
const NewsModal: React.FC<ModalProps> = ({ setIsOpen }) => {
  const { token } = theme.useToken();
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      open={true}
      closeIcon={
        <IoMdCloseCircleOutline size="25" onClick={handleCloseModal} />
      }
      footer={null}
      destroyOnClose
      styles={{
        body: {
          padding: 0,
          height: "600px",
          overflowY: "scroll",
          width: "100%",
        },
        content: {
          padding: token.paddingXS,
          marginTop: "-20px",
          display: "flex",
          justifySelf: "center",
          justifyContent: "center",
        },
        header: {
          padding: 0,
        },
      }}
    >
      <Flex
        flex="1"
        gap="small"
        style={{
          height: "100%",

          padding: token.paddingXS,
        }}
        vertical
      >
        <Flex flex="1" vertical align="center" justify="center">
          <Typography.Text
            style={{
              fontWeight: token.fontWeightStrong,
              fontSize: token.fontSizeHeading3,
            }}
          >
            Stay in the loop.
          </Typography.Text>
          <Typography.Text
            style={{
              fontWeight: token.fontWeightStrong,
              fontSize: token.fontSizeHeading3,
            }}
          >
            Sign up for our newsletter.
          </Typography.Text>
        </Flex>
        <Flex vertical flex="1" gap="middle">
          <Flex vertical flex="1">
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading5,
                fontWeight: token.fontWeightStrong,
              }}
            >
              First Name
              <span style={{ color: token.colorErrorActive }}>*</span>
            </Typography.Text>
            <Input size="large" placeholder="John." />
          </Flex>
          <Flex vertical flex="1">
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading5,
                fontWeight: token.fontWeightStrong,
              }}
            >
              Last Name<span style={{ color: token.colorErrorActive }}>*</span>
            </Typography.Text>
            <Input size="large" placeholder="Doe." />
          </Flex>
          <Flex vertical flex="1">
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading5,
                fontWeight: token.fontWeightStrong,
              }}
            >
              Email<span style={{ color: token.colorErrorActive }}>*</span>
            </Typography.Text>
            <Input size="large" placeholder="john.doe@xxxxx.com" />
          </Flex>
          <Flex vertical flex="1">
            <Typography.Text
              style={{
                fontSize: token.fontSizeHeading5,
                fontWeight: token.fontWeightStrong,
              }}
            >
              Company
            </Typography.Text>
            <Input size="large" placeholder="LinkedIn." />
          </Flex>
        </Flex>
        <Flex justify="flex-end">
          <Flex gap="middle">
            <Button
              style={{ background: "#1b1247", color: "#efc75e" }}
              size="large"
              onClick={() => setIsOpen(false)}
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};
export default NewsModal;
