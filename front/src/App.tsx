import React, { ReactElement } from 'react';
import { hydrate, render } from 'react-dom';

import { ApolloCustomProvider } from './graphql/apollo';
import RootProvider from './providers';
import SwitchNavigator from './components/navigation/SwitchNavigator';

const rootElement = document.getElementById('app') as HTMLElement;

const Component = (): ReactElement => (
  <ApolloCustomProvider>
    <RootProvider>
      <SwitchNavigator />
    </RootProvider>
  </ApolloCustomProvider>
);

const renderApp = (): void => {
  if (rootElement.hasChildNodes()) {
    hydrate(<Component />, rootElement);
  } else {
    render(<Component />, rootElement);
  }
};

renderApp();

/* eslint-disable */
if ((module as any).hot) {
  (module as any).hot.accept(['./components/navigation/SwitchNavigator'], () =>
    renderApp(),
  );
}
/* eslint-enable */
