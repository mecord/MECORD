import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SocialButton } from "../../atoms/SocialButton";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "row" }}
        spacing={4}
        justify={{ base: "space-between" }}
      >
        <Text>© Mecord</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
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
