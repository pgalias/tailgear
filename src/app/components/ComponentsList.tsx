import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sections from './sections';

export const ComponentsList = (): JSX.Element[] =>
  Sections.map(({ title, components }) => (
    <Fragment key={title}>
      <h3>{title}</h3>
      <ul>
        {Object.entries(components).map(([componentName, { url }]) => (
          <li key={componentName}>
            <Link to={url}>{componentName}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  ));
