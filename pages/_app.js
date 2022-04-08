import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import '../styles/globals.css'
import Layout from "../components/layout";

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
    <>
      <Head>
        <link rel="shortcut icon" href="/logo512.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
