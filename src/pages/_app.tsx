/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Inspect from "inspx";
import { SiteContextProvider } from "src/lib/context";
import { Header, Footer } from "src/components";

import "src/styles/app.css";

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
    <Inspect>
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
        defaultTheme="system"
      >
        <SiteContextProvider>
          <Head>
            <title>andy.ws - the portfolio of andy williams</title>
          </Head>

          <Header />
          {getLayout(<Component {...pageProps} />, pageProps)}
          <Footer />
        </SiteContextProvider>
      </ThemeProvider>
    </Inspect>
  );
};

export default MyApp;
