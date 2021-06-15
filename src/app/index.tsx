import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout';
import { StoreProvider } from './store/layout';
import { ComponentsProvider } from './store/components';

const WrappedLayout: FunctionComponent = () => {
  return (
    <StoreProvider>
      <ComponentsProvider>
        <Router>
          <Layout />
        </Router>
      </ComponentsProvider>
    </StoreProvider>
  );
};

export default WrappedLayout;
