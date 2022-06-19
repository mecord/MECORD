import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/organisms/Layout";
import theme from "../theme";
import "@fontsource/montserrat";
import "@fontsource/inter";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
