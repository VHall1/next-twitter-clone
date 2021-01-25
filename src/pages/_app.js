import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
