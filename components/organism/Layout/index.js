import { Box, Flex, Button } from "@chakra-ui/react";
import Nav from "../../molecules/Navbar";
import Main from "../../molecules/main";
import Footer from "../../molecules/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Flex flexDirection="column" minH="100vh">
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
