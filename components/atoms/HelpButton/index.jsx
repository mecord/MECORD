import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import NextImage from "../NextImage";
import PanduanMecord from "../../../assets/img/panduan-mecord.png";

export const HelpButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        position="fixed"
        bottom="0"
        right={[4, null, 16]}
        insetBlockEnd="20"
        zIndex="1"
      >
        <IconButton
          bg="white"
          onClick={onOpen}
          rounded="full"
          icon={<QuestionOutlineIcon w="6" h="6" color="mecord-main" />}
        />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>App Guide</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NextImage src={PanduanMecord} w={70} h={70} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HelpButton;
