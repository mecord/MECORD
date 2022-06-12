import { Box } from "@chakra-ui/react";
import ButtonHelp from "../../core/buttonhelp";

const MainMain = ({ children }) => (
  <>
    <Box flexGrow={1} minH={{ base: "xl" }}>
      {children}
      <ButtonHelp />
    </Box>
  </>
);

export default MainMain;
