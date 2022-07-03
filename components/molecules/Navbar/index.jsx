import { Text, Box, Stack, Container } from "@chakra-ui/react";
import Link from "next/link";

export default function Nav() {
  return (
    <Box bg="mecord-main" zIndex="1">
      <Container as={Stack} maxW={"6xl"} py={4}>
        <Link href="/">
          <Text
            textStyle="title-small"
            fontWeight="bold"
            color="white"
            cursor="pointer"
          >
            MECORD.
          </Text>
        </Link>
      </Container>
    </Box>
  );
}
