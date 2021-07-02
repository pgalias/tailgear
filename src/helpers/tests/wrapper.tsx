import React, { ComponentType, ReactElement } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { ComponentsProvider } from '../../app/provider/components';
import { ColorSchemeProvider } from '../../app/provider/colorScheme';

type ReturnType = { history: MemoryHistory; Wrapper: ComponentType };

export const wrapper = (): ReturnType => {
  const history = createMemoryHistory({
    // prevent showing a warning about loading mdx file which is used in root path
    initialEntries: ['/alerts/with-icon'],
  });

  const ComponentWrapper: ComponentType = ({ children }) => (
    <ComponentsProvider>
      <ColorSchemeProvider>
        <Router history={history}>{children as ReactElement}</Router>
      </ColorSchemeProvider>
    </ComponentsProvider>
  );

  return {
    history,
    Wrapper: ComponentWrapper,
  };
};
