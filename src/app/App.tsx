import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from './layout';
import { ComponentsProvider } from './store/components';

export const App: FunctionComponent = () => (
  <ComponentsProvider>
    <Router>
      <Switch>
        <Layout />
      </Switch>
    </Router>
  </ComponentsProvider>
);
