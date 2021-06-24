import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import {
  flattenAllComponents,
  useSelector,
  Component,
} from '../store/components';
import { ComponentView } from './ComponentView';
import { StaticPages } from '../constants/staticPages';
import { StaticPage } from '../components/staticPage';

export const RoutesList: FunctionComponent = () => {
  const allComponents = useSelector(flattenAllComponents);

  return (
    <>
      {StaticPages.map(({ url, content }) => (
        <Route path={url} key={url} exact>
          <StaticPage PageContent={content} />
        </Route>
      ))}
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
