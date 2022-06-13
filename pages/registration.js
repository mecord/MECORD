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

const RegistUser = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/user-data-search");
  };
  return (
    <>
      <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
        <VStack>
          <Text>Step 1</Text>
          <Text fontSize="2xl" fontWeight="bold">
            DATA DIRI
          </Text>
        </VStack>
        <SimpleGrid columns={2} spacing={10}>
          <Stack spacing="6">
            <FormControl>
              <FormLabel>Nama Lengkap</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Tanggal lahir</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>No Induk Kependudukan</FormLabel>
              <Input />
            </FormControl>
          </Stack>
          <Stack spacing="6">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Nomor HP Aktif</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Lorem Ipsum</FormLabel>
              <Input />
            </FormControl>
          </Stack>
        </SimpleGrid>
        <Button alignSelf="end" onClick={handleClick}>
          Selanjutnya
        </Button>
      </Stack>
    </>
  );
};

export default RegistUser;
