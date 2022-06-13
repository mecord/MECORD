import {
  Text,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Alert } from "../components/atoms/AlertDialog";
import { useRouter } from "next/router";

// temporary dummy data
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
    nik: "999766633312",
  },
};

const UserDataSearch = () => {
  const router = useRouter();
  const [isValid, setIsValid] = useState(true);
  const {
    isOpen: isOpenAlert1,
    onOpen: onOpenAlert1,
    onClose: onCloseAlert1,
  } = useDisclosure();
  const {
    isOpen: isOpenAlert2,
    onOpen: onOpenAlert2,
    onClose: onCloseAlert2,
  } = useDisclosure();

  const handleClick = () => {
    if (
      patient.rumah_sakit === "karya medika" &&
      patient.pasien.pasien_id === "123"
    ) {
      if (user.nik === patient.pasien.nik) {
        setIsValid(true);
      } else {
        onOpenAlert1();
      }
    } else {
      onOpenAlert2();
    }
  };

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
          <Button
            alignSelf="center"
            onClick={() => router.push("/registration")}
          >
            Sebelumnya
          </Button>
          <Spacer />
          <Button alignSelf="center">Selanjutnya</Button>
        </Flex>
        <Alert
          isOpen={isOpenAlert1}
          onClose={onCloseAlert1}
          title={"Error"}
          text={
            "Data pasien tidak sesuai dengan Data Diri. Cek data atau nomor pasien kembali"
          }
        />
        <Alert
          isOpen={isOpenAlert2}
          onClose={onCloseAlert2}
          title={"Error"}
          text={"Mohon periksa kembali data rumah sakit dan pasien id anda"}
        />
      </Stack>
    </>
  );
};

export default UserDataSearch;
