import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from './components/layout';
import { ComponentsProvider } from './store/components';
import { Pages } from './pages';

const WrappedLayout: FunctionComponent = () => {
  return (
    <ComponentsProvider>
      <Router>
        <Switch>
          <Layout>
            <Pages />
          </Layout>
        </Switch>
      </Router>
    </ComponentsProvider>
  );
};

export default WrappedLayout;
