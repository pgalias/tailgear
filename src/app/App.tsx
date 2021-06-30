import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from './layout';
import { ComponentsProvider } from './provider/components';
import { ColorSchemeProvider } from './provider/colorScheme';

export const App: FunctionComponent = () => (
  <ComponentsProvider>
    <ColorSchemeProvider>
      <Router>
        <Switch>
          <Layout />
        </Switch>
      </Router>
    </ColorSchemeProvider>
  </ComponentsProvider>
);
