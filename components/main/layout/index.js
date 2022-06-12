import Nav from "../navbar";
import FooterWithSocial from "../footer";
import MainMain from "../main";
import { Box, Flex, Button } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Flex flexDirection="column" minH="100vh">
        <Nav />
        <MainMain>{children}</MainMain>
        <FooterWithSocial />
      </Flex>
    </>
  );
};

export default Layout;
