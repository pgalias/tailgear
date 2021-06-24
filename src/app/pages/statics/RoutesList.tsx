import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { StaticPage } from './StaticPage';
import { StaticPages } from '../../constants/staticPages';

export const RoutesList: FC = () => (
  <>
    {StaticPages.map(({ url, content }) => (
      <Route path={url} key={url} exact>
        <StaticPage PageContent={content} />
      </Route>
    ))}
  </>
);
