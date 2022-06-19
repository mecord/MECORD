import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { SocialButton } from "../../atoms/SocialButton";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <Box bg="mecord-main-3" zIndex="1">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "row" }}
        spacing={4}
        justify={{ base: "space-between" }}
      >
        <Text color="mecord-main" textStyle="subtitle-small">
          © Mecord
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter w={10} h={10} />
          </SocialButton>
          <SocialButton label={"Facebook"} href={"#"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <AiFillInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
