import {
  Text,
  VStack,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Registration = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/user-data-search");
  };
  return (
    <>
      <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
        <VStack>
          <Text textStyle="subtitle-small">Step 1</Text>
          <Text textStyle="title-semi-medium">DATA DIRI</Text>
        </VStack>
        <SimpleGrid columns={[1, null, 2]} spacing={[6, null, 10]}>
          <Stack spacing="6">
            <FormControl>
              <FormLabel>Nama Lengkap</FormLabel>
              <Input variant="white" placeholder="Nama Lengkap" />
            </FormControl>
            <FormControl>
              <FormLabel>Tanggal lahir</FormLabel>
              <Input variant="white" type="date" />
            </FormControl>
            <FormControl>
              <FormLabel>No Induk Kependudukan</FormLabel>
              <Input variant="white" />
            </FormControl>
          </Stack>
          <Stack spacing="6">
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input variant="white" />
            </FormControl>
            <FormControl>
              <FormLabel>Nomor HP Aktif</FormLabel>
              <Input variant="white" />
            </FormControl>
          </Stack>
        </SimpleGrid>
        <Button alignSelf="end" onClick={handleClick} variant="blue">
          Selanjutnya
        </Button>
      </Stack>
    </>
  );
};

export default Registration;
