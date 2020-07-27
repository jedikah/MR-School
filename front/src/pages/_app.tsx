import * as React from "react";
import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import App, { AppInitialProps, AppContext } from "next/app";

import { wrapper } from "../redux/store";
import { apolloClient } from "../api/apollo";

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    // ctx.store.dispatch({type: 'TOE', payload: 'was set in _app'});

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };
  };

  public render() {
    //@ts-ignore
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default wrapper.withRedux(
  withApollo(() => {
    return apolloClient;
  })(MyApp)
);
