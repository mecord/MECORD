import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import HelpButton from "../components/atoms/HelpButton";

const GenerateQr = () => {
  const handleClickPrev = (e) => {
    e.preventDefault();
    router.push("/user-data-search");
  };

  return (
    <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
      <VStack>
        <Text>Step 4</Text>
        <Text fontSize="2xl" fontWeight="bold">
          Simpan QR
        </Text>
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
          <Text>Box 1</Text>
        </Stack>
        <Stack flex="3" bg="gray.300" spacing="5" p="5" h="xs" rounded="10">
          <Text>Box 2</Text>
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
        <Button>Selesai & Download</Button>
      </Center>
      <HelpButton>Generate QR</HelpButton>
    </Stack>
  );
};

export default GenerateQr;
