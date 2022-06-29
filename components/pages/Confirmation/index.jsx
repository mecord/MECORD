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
import { useRegist } from "../../../store/registrationStore";
import { useDataVerif } from "../../../store/dataVerifStore";

const Confirmation = () => {
  const { regist } = useRegist((state) => state);
  const { dataVerif } = useDataVerif((state) => state);

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
        <Text textAlign="center">{regist.nama_lengkap}</Text>
        <Text textAlign="center">NIK: {regist.nik}</Text>
        <Box bg="gray.100">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Tanggal Kunjungan</Th>
                <Th>No.Invoice</Th>
                <Th>Cabang</Th>
                <Th>Dokter</Th>
                <Th>Kegiatan</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataVerif.map((records) => (
                <Tr key="">
                  <Td>{records.tgl_kunjungan}</Td>
                  <Td>{records.no_invoice}</Td>
                  <Td>{records.cabang}</Td>
                  <Td>{records.dokter}</Td>
                  <Td>{records.kegiatan}</Td>
                </Tr>
              ))}
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
