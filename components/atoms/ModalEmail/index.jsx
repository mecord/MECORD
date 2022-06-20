import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import NextImage from "../NextImage";
import EmailLogo from "../../../assets/img/email-logo.png";
import EmailSuccess from "../../../assets/img/email-success.png";
import { useState } from "react";

export const ModalEmail = ({ isOpen, onClose }) => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleClick = () => setIsEmailSent(true);

  const handleClickClose = () => {
    setIsEmailSent(!isEmailSent);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody pt="14">
            <Center>
              {isEmailSent ? (
                <NextImage src={EmailSuccess} width="120px" height="120px" />
              ) : (
                <NextImage src={EmailLogo} width="120px" height="120px" />
              )}
            </Center>
            <Text
              textStyle="subtitle-small"
              textAlign="center"
              fontWeight="bold"
            >
              Kirim QR ke e-mail?
            </Text>
          </ModalBody>

          <ModalFooter alignSelf="center">
            {isEmailSent ? (
              <Button variant="blue" onClick={handleClickClose}>
                Selesai
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                  borderColor="mecord-main"
                >
                  Tidak
                </Button>
                <Button variant="blue" onClick={handleClick}>
                  Kirim
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEmail;
