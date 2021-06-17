import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';
import { Logo } from '../logo';

type Props = {
  isNavigationVisible: boolean;
  onHamburgerClick: () => void;
};

export const Header: FunctionComponent<Props> = ({
  isNavigationVisible,
  onHamburgerClick,
}) => (
  <header className={styles.header}>
    <div className={styles.navigation}>
      <button
        className={`${styles.button} ${styles.hamburger}`}
        type="button"
        onClick={onHamburgerClick}
        aria-expanded={isNavigationVisible}
        tabIndex={0}
      >
        <span className="sr-only">Open the menu</span>
        <FontAwesomeIcon
          icon={isNavigationVisible ? faTimes : faBars}
          size="3x"
          aria-hidden="true"
        />
      </button>
      <Logo />
    </div>
  </header>
);
