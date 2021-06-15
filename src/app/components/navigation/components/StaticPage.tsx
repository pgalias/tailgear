import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { StaticPage as StaticPageType } from '../../../constants/staticPages';
import styles from './style.module.css';

type Props = {
  page: StaticPageType;
};

export const StaticPage: FC<Props> = ({ page: { icon, url, title } }) => (
  <div className={styles.block}>
    <h3 className={styles.blockTitle}>
      <NavLink exact to={url} activeClassName={styles.activeLink}>
        {icon && <FontAwesomeIcon className={styles.blockIcon} icon={icon} />}
        <span className={styles.blockName}> {title}</span>
      </NavLink>
    </h3>
  </div>
);
