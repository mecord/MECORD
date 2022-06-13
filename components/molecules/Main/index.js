import { Box } from "@chakra-ui/react";
import ButtonHelp from "../../atoms/ButtonHelp";

const Main = ({ children }) => (
  <>
    <Box flexGrow={1} minH={{ base: "xl" }}>
      {children}
      <ButtonHelp />
    </Box>
  </>
);

export default Main;
