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

// TODO: Add second optional parameter -> variants = []
const wrapper = (Comp: FunctionComponent, id: ComponentId) => () => {
  const isPreview = useLayoutSelector(isPreviewMode);

  if (isPreview) {
    return (
      <Preview id={id}>
        <Comp />
      </Preview>
    );
  }

  return <Code component={Comp} />;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const RoutesList: FunctionComponent = () => {
  const allComponents = useComponentsSelector(flattenAllComponents);

  return allComponents.map(
    ({ redirect, url, component, id }: ParentComponent) => {
      const Comp = wrapper(component as FunctionComponent, id);
      return (
        <Route path={url} key={url} exact>
          {redirect ? <Redirect to={redirect} /> : <Comp />}
        </Route>
      );
    }
  );
};
