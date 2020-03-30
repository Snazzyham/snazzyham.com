import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga";

import "../styles/normalize.css";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    ReactGA.initialize("UA-84133610-1");
  }, []);
  return (
    <>
      <Head>
        <title>Soham Adwani - Web App Developer based in Indonesia</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
