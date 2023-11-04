
import Document, { Head, Html, Main, NextScript } from "next/document";



export default class _Document extends Document {
  

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=satoshi@700,300,400,500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
