import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import style from './style.module.css';

type Props = {
  name: string;
  section?: string;
  href: string;
  icon?: IconDefinition;
};

export const Link: FC<Props> = ({ name, section, href, icon }) => (
  <p className={style.link}>
    <NavLink exact to={href} activeClassName={style.activeLink}>
      {icon && <FontAwesomeIcon className={style.icon} icon={icon} />}
      {section && <span className="sr-only">{section}</span>}
      <span className={style.linkName}> {name}</span>
    </NavLink>
  </p>
);
