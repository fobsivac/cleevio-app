import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Providers from "../components/misc/Providers";
import Page from "../components/layout/Page";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Head>
        <title>Cleevio App</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Providers>
  );
};

export default App;
