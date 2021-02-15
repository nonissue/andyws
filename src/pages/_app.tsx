/* eslint-disable @typescript-eslint/ban-types */

import type { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import type { NextRouter } from "next/router";

import "./global.css";
import "./custom.css";

import { Providers } from "src/components";

export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}

const MyApp: React.FunctionComponent<AppProps & AppRenderProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Providers>
      <Head>
        <title>non</title>
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
};

export default MyApp;
