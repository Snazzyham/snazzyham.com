import Head from "next/head";

import "../styles/normalize.css";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Soham Adwani - Web App Developer based in Indonesia</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
