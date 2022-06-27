import {
  Text,
  VStack,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegist } from "../../../store/registrationStore";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const schema = yup.object().shape({
  nama_lengkap: yup.string().min(3).required(),
  tanggal_lahir: yup.string().required(),
  nik: yup.string().required(),
  email: yup.string().email().required(),
  no_hp: yup
    .string()
    .matches(phoneRegExp, "Nomor telepon tidak valid!")
    .required(),
});

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setRegist } = useRegist((state) => state);

  const router = useRouter();

  const handleOnSubmit = (data) => {
    setRegist(data);
    router.push("/user-data-search");
  };

  return (
    <>
      <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
        <VStack>
          <Text textStyle="subtitle-small">Step 1</Text>
          <Text textStyle="title-semi-medium">DATA DIRI</Text>
        </VStack>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <SimpleGrid columns={[1, null, 2]} spacing={[6, null, 10]}>
            <Stack spacing="6">
              <FormControl isInvalid={errors.nama_lengkap}>
                <FormLabel>Nama Lengkap</FormLabel>
                <Input variant="white" {...register("nama_lengkap")} />
                <FormErrorMessage>
                  {errors.nama_lengkap && errors.nama_lengkap?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.tanggal_lahir}>
                <FormLabel>Tanggal lahir</FormLabel>
                <Input
                  variant="white"
                  type="date"
                  {...register("tanggal_lahir")}
                />
                <FormErrorMessage>
                  {errors.tanggal_lahir && errors.tanggal_lahir?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.nik}>
                <FormLabel>No Induk Kependudukan</FormLabel>
                <Input variant="white" {...register("nik")} type="number" />
                <FormErrorMessage>
                  {errors.nik && errors.nik?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <FormControl isInvalid={errors.email}>
                <FormLabel>E-mail</FormLabel>
                <Input variant="white" {...register("email")} />
                <FormErrorMessage>
                  {errors.email && errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.no_hp}>
                <FormLabel>Nomor HP Aktif</FormLabel>
                <Input variant="white" {...register("no_hp")} type="number" />
                <FormErrorMessage>
                  {errors.no_hp && errors.no_hp?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
          </SimpleGrid>
          <Button variant="blue" mt="10" type="submit">
            Selanjutnya
          </Button>
        </form>
      </Stack>
    </>
  );
};

export default Registration;
