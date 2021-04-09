import React, { FunctionComponent } from 'react';
import { Layout } from './layout';
import { StoreProvider } from './store';

const WrappedLayout: FunctionComponent = () => {
  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  );
};

export default WrappedLayout;
