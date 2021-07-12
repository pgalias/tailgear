import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import style from './style.module.css';

type Props = {
  title: string;
  icon?: IconDefinition;
  expandable?: boolean;
  children: JSX.Element | JSX.Element[];
};

export const LinkGroup: FC<Props> = ({
  title,
  icon,
  expandable = false,
  children,
}) => {
  const [expanded, setExpanded] = useState(!expandable);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className={style.section}>
      <p className={style.sectionTitle}>
        {icon && <FontAwesomeIcon className={style.icon} icon={icon} />}
        <span className={style.sectionTitleText}> {title}</span>
        {expandable && (
          <button
            type="button"
            onClick={toggleExpanded}
            className={style.expandIcon}
          >
            <FontAwesomeIcon icon={expanded ? faMinus : faPlus} />
          </button>
        )}
      </p>
      <ul className={`${style.sectionList} ${expanded ? style.expanded : ''}`}>
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
};
