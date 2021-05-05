import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sections from './sections';

type Props = {
  sectionClassName?: string;
  activeClassName?: string;
};

export const ComponentsList = ({
  sectionClassName,
  activeClassName,
}: Props): JSX.Element[] =>
  Sections.map(({ title, icon, components }) => (
    <div className={sectionClassName} key={title}>
      <h3>
        {icon && <FontAwesomeIcon icon={icon} />}
        <span> {title}</span>
      </h3>
      <ul>
        {Object.entries(components).map(([componentName, { url }]) => (
          <li key={componentName}>
            <NavLink to={url} activeClassName={activeClassName}>
              <span className="sr-only">{title}</span>
              <span className="inline-block capitalize">{componentName}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  ));
