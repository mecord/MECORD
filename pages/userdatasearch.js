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

const UserDataSearch = () => {
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
        <Button alignSelf="center">Konfirmasi</Button>
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
