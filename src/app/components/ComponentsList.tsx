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
        {icon && <FontAwesomeIcon icon={icon} />} {title}
      </h3>
      <ul>
        {Object.entries(components).map(([componentName, { url }]) => (
          <li key={componentName}>
            <NavLink to={url} activeClassName={activeClassName}>
              {componentName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  ));
