import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { ComponentsList } from '../components';
import styles from './navigation.module.css';
import { changeMode, useDispatch } from '../store/layout';

// TODO: Make ComponentList generic
// let's take a component list for that and which mode should represent
export const Navigation: FunctionComponent = () => {
  const dispatch = useDispatch();
  const setStaticMode = () => dispatch(changeMode('static'));

  return (
    <nav className={styles.navigation}>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <h3>
            <NavLink
              exact
              to="/"
              activeClassName={styles.currentLink}
              onClick={setStaticMode}
            >
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
              onClick={setStaticMode}
            >
              <FontAwesomeIcon icon={faCodeBranch} />
              <span> Contribution</span>
            </NavLink>
          </h3>
        </div>
        <ComponentsList
          activeClassName={styles.currentLink}
          sectionClassName={styles.section}
          blockClassName={styles.block}
        />
      </div>
    </nav>
  );
};
