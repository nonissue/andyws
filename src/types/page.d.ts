/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import { AppProps as NextAppProps } from "next/app";
import { NextComponentType, NextPage, NextPageContext } from "next/types";

export type AppComponentType<
  C = NextPageContext,
  IP = {},
  P = {}
> = NextComponentType<C, IP, P>;

export interface CustomAppProps<P = {}> extends NextAppProps<P> {
  Component: AppComponentType<NextPageContext, any, P> & NextPage;
}

export type CustomAppPage<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (component: JSX.Element) => JSX.Element;
};
