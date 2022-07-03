import {
  Stack,
  Text,
  Flex,
  VStack,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import NextImage from "../../atoms/NextImage";
import LogoHospital from "../../../assets/img/logo-hospital.png";
import { useRouter } from "next/router";

const DashboardAdmin = () => {
  const [dataPatient, setDataPatient] = useState();
  const router = useRouter();

  const getRecordData = async () => {
    await axios.get("http://localhost:8000/hospital").then((res) => {
      setDataPatient(res.data[0].patient);
    });
  };

  useEffect(() => {
    getRecordData();
  }, []);

  const handleClickLogout = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
      <Flex flexDirection={["column", null, "row"]}>
        <VStack
          flex="2"
          bg="white"
          spacing="5"
          p="5"
          h="xs"
          me={{ md: 10 }}
          mb={{ sm: 10 }}
          rounded="10"
        >
          <NextImage src={LogoHospital} w={50} h={70} />
          <Box textAlign="center">
            <Text textStyle="title-small">Rumah Sakit Karya Medika</Text>
            <Text textStyle="subtitle-small">Unit Administrasi</Text>
          </Box>
          <Button variant="outline" p="2" onClick={handleClickLogout}>
            Logout
          </Button>
        </VStack>
        <Stack
          flex="3"
          bg="white"
          spacing="5"
          p="5"
          h="xs"
          rounded="10"
          color="black"
        >
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>ID Pasien</Th>
                <Th>NIK</Th>
                <Th>Nama Lengkap</Th>
                <Th>Tanggal Lahir</Th>
                <Th>No HP</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataPatient &&
                dataPatient.map((records) => (
                  <Tr key="">
                    <Td>{records.patientID}</Td>
                    <Td>{records.nik}</Td>
                    <Td>{records.nama_lengkap}</Td>
                    <Td>{records.tanggal_lahir}</Td>
                    <Td>{records.no_hp}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default DashboardAdmin;
