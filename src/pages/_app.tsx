/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import type { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { SiteContextProvider } from "src/lib/context";
import { Nav } from "src/components";

import "./global.css";
import "./custom.css";

type ComponentWithLayout<P> = NextComponentType<NextPageContext, any, P> & {
  getLayout?: (
    page: JSX.Element,
    layoutProps: Record<string, unknown>
  ) => JSX.Element;
};

type AppPropsWithLayout<P = Record<string, unknown>> = AppProps<P> & {
  Component: ComponentWithLayout<P> & { theme: string };
};

const MyApp: React.FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps,
}) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <SiteContextProvider>
        <Head>
          <title>non</title>
        </Head>

        <Nav />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </SiteContextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
