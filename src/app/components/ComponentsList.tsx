import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sections from './sections';

type Props = {
  sectionClassName?: string;
  activeClassName?: string;
};

// TODO: Make sure this don't need to be changed after variants added
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
        {components.map(({ url, name }) => (
          <li key={name}>
            <NavLink to={url} activeClassName={activeClassName}>
              <span className="sr-only">{title}</span>
              <span className="inline-block capitalize">{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  ));
