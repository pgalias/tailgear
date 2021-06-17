import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import {
  flattenAllComponents,
  useSelector as useComponentsSelector,
  Component,
} from '../store/components';
import { ComponentView } from './ComponentView';

export const RoutesList: FunctionComponent = () => {
  const allComponents = useComponentsSelector(flattenAllComponents);

  return (
    <>
      {allComponents.map(
        ({
          url,
          name,
          disclaimer,
          variants,
          blockId,
          sectionId,
        }: Component) => {
          return (
            <Route path={url} key={url} exact>
              <ComponentView
                name={name}
                variants={variants}
                disclaimer={disclaimer}
                blockId={blockId}
                sectionId={sectionId}
              />
            </Route>
          );
        }
      )}
    </>
  );
};
