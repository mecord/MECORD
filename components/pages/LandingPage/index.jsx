import { Box, Stack, Text, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LandingPage = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/registration");
  };
  return (
    <Center height="xl">
      <Stack spacing="5" textAlign="center">
        <Text fontSize="5xl" fontWeight="bold">
          Lorem Ipsum
        </Text>
        <Text>Lorem ipsum dolor sit amet</Text>
        <Box alignSelf="center">
          <Button onClick={handleClick}>Register Now</Button>
        </Box>
      </Stack>
    </Center>
  );
};

export default LandingPage;
