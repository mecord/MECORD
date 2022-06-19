import { Box, Stack, Text, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextImage from "../../atoms/NextImage";
import BlurBackgroundImage from "../../../assets/img/blur-main.png";

const LandingPage = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/registration");
  };
  return (
    <Stack>
      <NextImage src={BlurBackgroundImage} layout="fill" objectFit="cover" />
      <Center height="xl" zIndex="1">
        <Stack spacing="5" textAlign="center">
          <Text textStyle="title-big" color="white">
            MECORD.
          </Text>
          <Text textStyle="title-medium" color="white">
            All your medical records in one website.
          </Text>
          <Box alignSelf="center">
            <Button variant="white" onClick={handleClick} color="mecord-main">
              Register Now
            </Button>
          </Box>
        </Stack>
      </Center>
    </Stack>
  );
};

export default LandingPage;
