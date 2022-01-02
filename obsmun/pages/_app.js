import { useEffect } from "react";
import AOS from "aos";

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

  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
