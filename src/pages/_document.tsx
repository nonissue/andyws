/* eslint-disable */
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-CA">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="Description"
            content="Nonissue: The portfolio and online home of Andy Williams"
          />
          <meta name="robots" content="index, follow" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,200;1,700&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,700&family=IBM+Plex+Serif:wght@100&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gray-50 dark:bg-gray-900 text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
