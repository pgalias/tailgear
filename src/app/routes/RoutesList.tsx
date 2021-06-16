import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Code } from '../components/code';
import { selectMode, useSelector as useLayoutSelector } from '../store/layout';
import {
  flattenAllComponents,
  useSelector as useComponentsSelector,
  ComponentId,
  ParentComponent,
} from '../store/components';
import { Preview } from '../components/preview';
import { Live } from '../components/live';

const wrapper = (
  Comp: FunctionComponent,
  id: ComponentId,
  disclaimer?: string
) => () => {
  const mode = useLayoutSelector(selectMode);

  if (mode === 'preview') {
    return (
      <Preview id={id} disclaimer={disclaimer}>
        <Comp />
      </Preview>
    );
  }

  if (mode === 'live') {
    return <Live component={Comp} />;
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
