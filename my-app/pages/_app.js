import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Crypto Devs</title>
        <meta name="description" content="ICO-Dapp" />
        <link
          rel="shortcut icon"
          href="https://nft-collection-learnweb3-nine.vercel.app/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
