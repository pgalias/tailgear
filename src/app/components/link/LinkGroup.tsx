import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import style from './style.module.css';

type Props = {
  title: string;
  icon?: IconDefinition;
  children: JSX.Element | JSX.Element[];
};

export const LinkGroup: FC<Props> = ({ title, icon, children }) => (
  <div className={style.section}>
    <p className={style.sectionTitle}>
      {icon && <FontAwesomeIcon className={style.icon} icon={icon} />}
      <span className={style.sectionTitleText}> {title}</span>
    </p>
    <ul className={style.sectionList}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  </div>
);
