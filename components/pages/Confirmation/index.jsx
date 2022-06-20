import {
  Box,
  Button,
  Flex,
  Spacer,
  Stack,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Confirmation = () => {
  const router = useRouter();

  const handleClickPrev = (e) => {
    e.preventDefault();
    router.push("/user-data-search");
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    router.push("/generate-qr");
  };
  return (
    <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
      <VStack>
        <Text textStyle="subtitle-small">Step 2</Text>
        <Text textStyle="title-semi-medium">RIWAYAT KESEHATAN</Text>
      </VStack>
      <Stack p="10" spacing="4" bg="white" rounded="10">
        <Text textAlign="center">Oentari Ratna Anjani</Text>
        <Text textAlign="center">NIK : 0374850248542; 60 tahun</Text>
        <Box bg="gray.100">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Stack>
      <Flex>
        <Button variant="white" alignSelf="center" onClick={handleClickPrev}>
          Kembali
        </Button>
        <Spacer />
        <Button variant="blue" alignSelf="center" onClick={handleClickNext}>
          Konfirmasi
        </Button>
      </Flex>
    </Stack>
  );
};

export default Confirmation;
