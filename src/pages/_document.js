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
          <meta
            name="title"
            content="Soham Adwani - Web App Developer based in Indonesia"
          />
          <meta
            name="description"
            content="Soham Adwani is a full stack web application developer based in Indonesia."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://snazzyham.com/" />
          <meta
            property="og:title"
            content="Soham Adwani - Web App Developer based in Indonesia"
          />
          <meta
            property="og:description"
            content="Soham Adwani is a full stack web application developer based in Indonesia."
          />
          <meta
            property="og:image"
            content="https://images.prismic.io/snazzyham/265fecdf-3ff9-48c5-82e0-77f889c029e6_IMG_0053.JPG?auto=compress,format"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://snazzyham.com/" />
          <meta
            property="twitter:title"
            content="Soham Adwani - Web App Developer based in Indonesia"
          />
          <meta
            property="twitter:description"
            content="Soham Adwani is a full stack web application developer based in Indonesia."
          />
          <meta
            property="twitter:image"
            content="https://images.prismic.io/snazzyham/265fecdf-3ff9-48c5-82e0-77f889c029e6_IMG_0053.JPG?auto=compress,format"
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
