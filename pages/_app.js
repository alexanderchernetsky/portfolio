import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Router from "next/router";
import NProgress from "nprogress"; // nprogress module
import theme from "../styled-components/theme";
import GlobalStyles from "../styled-components/globalStyles";
import "nprogress/nprogress.css"; // styles of nprogress

// Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon.ico"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
