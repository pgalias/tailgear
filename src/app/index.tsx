import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './layout';
import { StoreProvider } from './store/layout';

const WrappedLayout: FunctionComponent = () => {
  return (
    <StoreProvider>
      <Router>
        <Layout />
      </Router>
    </StoreProvider>
  );
};

export default WrappedLayout;
