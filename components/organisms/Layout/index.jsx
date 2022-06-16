import { Flex } from "@chakra-ui/react";
import Nav from "../../molecules/Navbar";
import Footer from "../../molecules/footer";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column">
      <Nav />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
