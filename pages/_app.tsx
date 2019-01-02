import App, {NextAppContext} from 'next/app';
import Head from 'next/head';
import * as React from 'react';

import {AppProvider} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const {SHOPIFY_API_KEY} = process.env

class SimonApp extends App {

  static async getInitialProps({Component, ctx} : NextAppContext) {
    let pageProps = {}
    const shopOrigin = ctx.query.shop
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {pageProps, shopOrigin}
  }

  render() {
    const {Component, pageProps, shopOrigin} = this.props as any;
    return (
      <React.Fragment>
        <Head>
          <title>Simon Sample App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta charSet="utf-8"/>
        </Head>
        <AppProvider shopOrigin={shopOrigin} apiKey={SHOPIFY_API_KEY}>
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default SimonApp;
