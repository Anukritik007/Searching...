import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Resourceful</title>
        <meta
          name="description"
          content="One-stop finder for resources of any kind posted by community of the like."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href={"https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap"}
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
