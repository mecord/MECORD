import { Box, Stack, Text, Input, Button, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center height="xl">
      <Stack spacing="5" textAlign="center">
        <Text fontSize="5xl" fontWeight="bold">
          Lorem Ipsum
        </Text>
        <Text>Lorem ipsum dolor sit amet</Text>
        <Box alignSelf="center">
          <Button>Register Now</Button>
        </Box>
      </Stack>
    </Center>
  );
}
