import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import {
  flattenAllComponents,
  useSelector,
  Component,
} from '../../provider/components';
import { ComponentView } from './ComponentView';

export const RoutesList: FC = () => {
  const allComponents = useSelector(flattenAllComponents);

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
        }: Component) => (
          <Route path={url} key={url} exact>
            <ComponentView
              name={name}
              variants={variants}
              disclaimer={disclaimer}
              blockId={blockId}
              sectionId={sectionId}
            />
          </Route>
        )
      )}
    </>
  );
};
