import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSections } from '../store/components';

type Props = {
  sectionClassName?: string;
  activeClassName?: string;
};

export const ComponentsList: FunctionComponent<Props> = ({
  sectionClassName,
  activeClassName,
}) => {
  const sections = useSections();

  return (
    <>
      {sections.map(({ title, icon, components }) => (
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
      ))}
    </>
  );
};
