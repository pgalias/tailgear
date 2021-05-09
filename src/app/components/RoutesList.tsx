import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Sections from './sections';
import { Section as SectionType, Component, WithoutVariants } from './types';
import { Code } from '../code';
import { isPreviewMode, useSelector } from '../store/layout';

// TODO: Add second optional parameter -> variants = []
const wrapper = (
  Comp: FunctionComponent,
  variants: (Component & WithoutVariants)[] | undefined
) => () => {
  const isPreview = useSelector(isPreviewMode);

  if (isPreview) {
    // TODO: Create a Preview component with variants select and rendering the component itself
    return (
      <div className="px-9">
        {variants?.map((variant) => (
          <p>{variant.name}</p>
        ))}
        <Comp />
      </div>
    );
  }

  return <Code component={Comp} />;
};

export const RoutesList = (): JSX.Element[] =>
  (Sections as SectionType[])
    .flatMap(({ components }) => components)
    .flatMap((components) => [components, ...(components?.variants || [])])
    .map(({ redirect, url, component, variants }) => (
      <Route path={url} key={url} exact>
        {redirect ? (
          <Redirect to={redirect} />
        ) : (
          wrapper(component as FunctionComponent, variants)()
        )}
      </Route>
    ));
