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
  const [sendEmail, setSendEmail] = useState(false);

  const handleClick = () => setSendEmail(true);

  const handleClickClose = () => {
    setSendEmail(!sendEmail);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody pt="14">
            <Center>
              {sendEmail ? (
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
            {sendEmail ? (
              <Button variant="blue" onClick={handleClickClose}>
                Selesai
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  colorScheme="mecord-main"
                  mr={3}
                  onClick={onClose}
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
