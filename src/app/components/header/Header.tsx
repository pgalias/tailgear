import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faEye,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { selectMode, useSelector } from '../../store/layout';
import styles from './header.module.css';
import { Logo } from '../logo';

type Props = {
  isNavigationVisible: boolean;
  onHamburgerClick: () => void;
  onModeChange: () => void;
};

export const Header: FunctionComponent<Props> = ({
  isNavigationVisible,
  onHamburgerClick,
  onModeChange,
}) => {
  const mode = useSelector(selectMode);

  return (
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
      {mode !== 'static' && (
        <button
          type="button"
          onClick={onModeChange}
          className={`${styles.button} ${styles.buttonAccented}`}
          title={mode.toUpperCase()}
        >
          <span className="sr-only">{mode.toUpperCase()}</span>
          <FontAwesomeIcon
            icon={mode === 'preview' ? faEye : faCode}
            aria-hidden="true"
          />
        </button>
      )}
    </header>
  );
};
