import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout';
import { ComponentsProvider } from './store/components';

const WrappedLayout: FunctionComponent = () => {
  return (
    <ComponentsProvider>
      <Router>
        <Layout />
      </Router>
    </ComponentsProvider>
  );
};

export default WrappedLayout;
