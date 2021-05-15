import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { ComponentsList } from '../components';
import styles from './navigation.module.css';

export const Navigation: FunctionComponent = () => (
  <nav className={styles.navigation}>
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h3>
          <NavLink exact to="/" activeClassName={styles.currentLink}>
            <FontAwesomeIcon icon={faHome} />
            <span> Home</span>
          </NavLink>
        </h3>
      </div>
      <div className={styles.section}>
        <h3>
          <NavLink
            exact
            to="/contribution"
            activeClassName={styles.currentLink}
          >
            <FontAwesomeIcon icon={faCodeBranch} />
            <span> Contribution</span>
          </NavLink>
        </h3>
      </div>
      <ComponentsList
        activeClassName={styles.currentLink}
        sectionClassName={styles.section}
      />
    </div>
  </nav>
);
