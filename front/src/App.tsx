import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import 'fontsource-roboto';

import { ContextProvider } from './contexts';
import { apolloClient } from './graphql/apollo';

function App() {
  return (
    <Router>
      <head>
        <link rel="stylesheet" href={require('hover.css/css/hover-min.css')} />
      </head>

      <ContextProvider>
        <ApolloProvider client={apolloClient}>
          <Route path="/login" component={require('./pages/Login').default} />
          <Route path="/home" component={require('./pages/Home').default} />
          <Route path="/main" component={require('./pages/Main').default} />
          <></>
        </ApolloProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
