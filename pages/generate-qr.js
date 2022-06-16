import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import HelpButton from "../components/atoms/HelpButton";
import GenerateQrCode from "../components/pages/GenerateQr";

const GenerateQr = () => {
  return (
    <>
      <GenerateQrCode />
      <HelpButton>Generate QR</HelpButton>
    </>
  );
};

export default GenerateQr;
