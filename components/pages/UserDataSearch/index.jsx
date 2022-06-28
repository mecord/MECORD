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
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Alert } from "../../atoms/AlertDialog";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegist } from "../../../store/registrationStore";
import { useDataVerif } from "../../../store/dataVerifStore";
import { userDataSearchSchema } from "../../../utils/schema/userDataSearch.ts";

const DataSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userDataSearchSchema),
  });

  const { setDataVerif } = useDataVerif((state) => state);
  const { regist } = useRegist((state) => state);

  const router = useRouter();
  const [dataPatient, setDataPatient] = useState();

  const {
    isOpen: isOpenAlert1,
    onOpen: onOpenAlert1,
    onClose: onCloseAlert1,
  } = useDisclosure();

  const handleOnSubmit = async (data) => {
    getRecordData(data);

    const findRecordData =
      dataPatient &&
      dataPatient?.[0].patient.find((datap) => {
        return datap.patientID == data.patient_id;
      });

    if (findRecordData?.nik === regist.nik) {
      setDataVerif(findRecordData.hospital_visit);
      router.push("/confirmation");
    } else {
      await onOpenAlert1();
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

  const getRecordData = async (data) => {
    await axios
      .get("http://localhost:8000/hospital", {
        params: { rumah_sakit: data.rumah_sakit },
      })
      .then((res) => {
        setDataPatient(res.data);
      });
  };

  return (
    <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
      <VStack>
        <Text textStyle="subtitle-small">Step 2</Text>
        <Text textStyle="title-semi-medium">RIWAYAT KESEHATAN</Text>
      </VStack>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Stack spacing="6" px={{ md: "24" }}>
          <FormControl isInvalid={errors.rumah_sakit}>
            <FormLabel>Rumah Sakit</FormLabel>
            <Input
              variant="white"
              placeholder="Cari Rumah Sakit"
              {...register("rumah_sakit")}
            />
            <FormErrorMessage>
              {errors.rumah_sakit && errors.rumah_sakit.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.patient_id}>
            <FormLabel>Patient Id</FormLabel>
            <Input variant="white" {...register("patient_id")} />
            <FormErrorMessage>
              {errors.patient_id && errors.patient_id.message}
            </FormErrorMessage>
          </FormControl>
          <Button variant="blue" alignSelf="center" type="submit">
            Konfirmasi
          </Button>
        </Stack>
      </form>
      <Flex>
        <Button variant="white" alignSelf="center" onClick={handleClickPrev}>
          Kembali
        </Button>
        <Spacer />
        <Button variant="blue" alignSelf="center" onClick={handleClickNext}>
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
    </Stack>
  );
};

export default DataSearch;
