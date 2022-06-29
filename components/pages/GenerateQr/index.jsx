import {
  Button,
  Center,
  Flex,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ModalEmail from "../../atoms/ModalEmail";
import QRCode from "react-qr-code";
import { useDataVerif } from "../../../store/dataVerifStore";

const GenerateQrCode = () => {
  const {
    isOpen: isEmailOpen,
    onOpen: onEmailOpen,
    onClose: onEmailClose,
  } = useDisclosure();

  const { dataVerif } = useDataVerif((state) => state);

  const values = JSON.stringify(dataVerif);

  return (
    <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
      <VStack>
        <Text textStyle="subtitle-small">Step 4</Text>
        <Text textStyle="title-semi-medium">SIMPAN QR</Text>
      </VStack>
      <Flex color="white" flexDirection={["column", null, "row"]}>
        <Stack
          flex="2"
          bg="gray.300"
          spacing="5"
          p="5"
          h="xs"
          me={{ md: 10 }}
          mb={{ sm: 10 }}
          rounded="10"
        >
          <Center>
            <QRCode value={values} bgColor="#fff" fgColor="#black" size="280" />
          </Center>
        </Stack>
        <Stack
          flex="3"
          bg="white"
          spacing="5"
          p="5"
          h="xs"
          rounded="10"
          color="black"
        >
          <Text variant="subtitle-small" fontWeight="bold">
            PENGGUNAAN QR
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus
            dolor nec pellentesque aliquet. In gravida velit at mi tincidunt
            dignissim. Nullam sed feugiat ligula. Fusce vestibulum ultrices
            malesuada. Pellentesque sed massa eget neque scelerisque placerat ut
            sed ex. Suspendisse ultricies sed magna vitae volutpat.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus
            dolor nec pellentesque aliquet.
          </Text>
        </Stack>
      </Flex>
      <Center>
        <Button variant="blue" onClick={onEmailOpen}>
          Selesai & Download
        </Button>
      </Center>
      <ModalEmail isOpen={isEmailOpen} onClose={onEmailClose} />
    </Stack>
  );
};

export default GenerateQrCode;
