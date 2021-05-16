import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Code } from '../code';
import {
  isPreviewMode,
  useSelector as useLayoutSelector,
} from '../store/layout';
import {
  flattenAllComponents,
  useSelector as useComponentsSelector,
  ComponentId,
  ParentComponent,
} from '../store/components';
import { Preview } from '../preview';

const wrapper = (
  Comp: FunctionComponent,
  id: ComponentId,
  disclaimer?: string
) => () => {
  const isPreview = useLayoutSelector(isPreviewMode);

  if (isPreview) {
    return (
      <Preview id={id} disclaimer={disclaimer}>
        <Comp />
      </Preview>
    );
  }

  return <Code component={Comp} />;
};

export const RoutesList: FunctionComponent = () => {
  const allComponents = useComponentsSelector(flattenAllComponents);

  return (
    <>
      {allComponents.map(
        ({ redirect, url, component, id, disclaimer }: ParentComponent) => {
          const Comp = wrapper(component as FunctionComponent, id, disclaimer);
          return (
            <Route path={url} key={url} exact>
              {redirect ? <Redirect to={redirect} /> : <Comp />}
            </Route>
          );
        }
      )}
    </>
  );
};
