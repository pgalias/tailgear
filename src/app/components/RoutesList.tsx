import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import Sections from './sections';
import { Code } from '../code';
import { isPreviewMode, useSelector } from '../store';

const wrapper = (Component: FunctionComponent) => () => {
  const isPreview = useSelector(isPreviewMode);

  if (isPreview) {
    return (
      <div className="px-9">
        <Component />
      </div>
    );
  }

  return <Code component={Component} />;
};

export const RoutesList = (): JSX.Element[] => {
  const allComponents = Sections.flatMap(({ components }) =>
    Object.values(components)
  );

  return allComponents.map(({ url, component }) => (
    <Route
      component={wrapper(component) as FunctionComponent}
      path={url}
      key={url}
    />
  ));
};
