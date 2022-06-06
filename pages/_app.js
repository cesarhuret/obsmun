import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import WithSubnavigation from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 1000
    });
  }, []);

  return (
    <ChakraProvider>
      <Head>
        <link rel="shortcut icon" href="/logo512.png" />
      </Head>
      <WithSubnavigation/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
