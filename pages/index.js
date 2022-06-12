import Head from "next/head";
import { Box, Stack, Text, Input, Button } from "@chakra-ui/react";

export default function Home() {
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
        <Text fontSize="5xl" fontWeight="bold">
          Lorem Ipsum
        </Text>
        <Text>Lorem ipsum dolor sit amet</Text>
        <Box alignSelf="center">
          <Button>Register Now</Button>
        </Box>
      </Stack>
    </Box>
  );
}
