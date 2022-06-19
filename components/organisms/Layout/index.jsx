import { Flex } from "@chakra-ui/react";
import Nav from "../../molecules/Navbar";
import Footer from "../../molecules/Footer";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" bg="mecord-main-2">
      <Nav />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
