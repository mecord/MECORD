import { Text, Box, Stack, Container } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Box bg="mecord-main" zIndex="1">
      <Container as={Stack} maxW={"6xl"} py={4}>
        <Text textStyle="title-small" fontWeight="bold" color="white">
          MECORD.
        </Text>
      </Container>
    </Box>
  );
}
