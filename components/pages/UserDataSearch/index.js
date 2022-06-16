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
import { Alert } from "../../atoms/AlertDialog";
import { useRouter } from "next/router";
import { user, patient } from "../../../mock";

const DataSearch = () => {
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

  const handleClickConfirm = () => {
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

  const handleClickPrev = (e) => {
    e.preventDefault();
    router.push("/registration");
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    router.push("/confirmation");
  };

  return (
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
      <Button alignSelf="center" onClick={handleClickConfirm}>
        Konfirmasi
      </Button>
      <Flex>
        <Button alignSelf="center" onClick={handleClickPrev}>
          Kembali
        </Button>
        <Spacer />
        <Button alignSelf="center" onClick={handleClickNext}>
          Selanjutnya
        </Button>
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
  );
};

export default DataSearch;
