import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Providers from "../components/misc/Providers";
import Page from "../components/layout/Page";
import { getCountries } from "../rest-api/country";
import { ICountry } from "../utils/models";
import { useStore } from "../utils/store";

const MyApp = ({
  Component,
  pageProps,
  countries,
}: AppProps & { countries: ICountry[] }) => {
  const setCountries = useStore((store) => store.setCountries);
  setCountries(countries);

  return (
    <Providers>
      <Head>
        <title>Cleevio App</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Providers>
  );
};

export default MyApp;

MyApp.getInitialProps = async () => {
  const countries = await getCountries();
  return { countries: countries.data };
};
