import {
  Box,
  Text,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const user = {
  nama_lengkap: "Zaki",
  tanggal_lahir: "2008-11-11",
  nik: "99976663331",
  email: "kuepukis@gmail.com",
  no_hp: "08588273",
};

const patient = {
  rumah_sakit: "karya medika",
  pasien: {
    pasien_id: "123",
    nama_lengkap: "Zaki",
    nik: "99976663331",
  },
};

const BadRequest = () => {
  const [isValid, setIsValid] = useState(false);

  if (isValid) {
    return <UserDataSearch />;
  }

  console.log(isValid);
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack spacing="5" textAlign="center">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Data tidak sesuai dengan Data Diri.
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            Cek data atau nomor pasien kembali.
          </Text>
        </Box>
        <Box alignSelf="center">
          <Button onClick={() => setIsValid((prevState) => !prevState)}>
            Kembali
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

const UserDataSearch = () => {
  const [isValid, setIsValid] = useState(true);

  const handleClick = () => {
    // if (
    //   typeof patient.rumah_sakit !== "undefined" &&
    //   typeof patient.pasien.pasien_id !== "undefined"
    // ) {
    if (
      patient.rumah_sakit === "karya medika" &&
      patient.pasien.pasien_id === "1234"
    ) {
      if (user.nik === patient.pasien.nik) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } else {
      alert("mohon periksa kembali data rumah sakit dan pasien id anda");
    }
    // } else {
    //   alert("mohon periksa kembali data rumah sakit dan pasien id");
    // }
  };

  if (!isValid) {
    return <BadRequest />;
  }

  console.log(isValid);

  return (
    <>
      <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
        <VStack>
          <Text>Step 2</Text>
          <Text fontSize="2xl" fontWeight="bold">
            Riwayat Kesehatan
          </Text>
        </VStack>
        <Stack spacing="6">
          <FormControl>
            <FormLabel>Rumah Sakit</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Patient Id</FormLabel>
            <Input />
          </FormControl>
        </Stack>
        <Button alignSelf="center" onClick={handleClick}>
          Konfirmasi
        </Button>
        <Flex>
          <Button alignSelf="center">Sebelumnya</Button>
          <Spacer />
          <Button alignSelf="center">Selanjutnya</Button>
        </Flex>
      </Stack>
    </>
  );
};

export default UserDataSearch;
