import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDoc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans|Rubik:300,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta
            name="title"
            content="Soham Adwani - Web App Developer based in Indonesia"
          />
          <meta
            name="description"
            content="Soham Adwani is a full stack web application developer based in Indonesia."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDoc;
