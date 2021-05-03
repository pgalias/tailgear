import React from 'react';
import { Route } from 'react-router-dom';
import Sections from './sections';

export const RoutesList = (): JSX.Element[] => {
  const allComponents = Sections.map(({ components }) =>
    Object.values(components)
  );

  return allComponents.map(([{ url, component }]) => (
    <Route component={component} path={url} key={url} />
  ));
};
