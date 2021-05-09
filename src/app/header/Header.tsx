import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faEye,
  faCode,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import { isCodeMode, isNavigationOpened, useSelector } from '../store/layout';
import styles from './header.module.css';

type Props = {
  onHamburgerClick: () => void;
  onCopy: () => void;
  onModeChange: () => void;
};

export const Header: FunctionComponent<Props> = ({
  onHamburgerClick,
  onCopy,
  onModeChange,
}) => {
  const isCode = useSelector(isCodeMode);
  const isNavigationVisible = useSelector(isNavigationOpened);

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <button
          className={styles.button}
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
      </div>
      {isCode && (
        <button
          type="button"
          onClick={onCopy}
          className={`${styles.button} ${styles.buttonAccented}`}
          title="Copy"
        >
          <span className="sr-only">Copy</span>
          <FontAwesomeIcon icon={faCopy} aria-hidden="true" />
        </button>
      )}
      <button
        type="button"
        onClick={onModeChange}
        className={`${styles.button} ${styles.buttonAccented}`}
        title={isCode ? 'Preview' : 'Code'}
      >
        <span className="sr-only">{isCode ? 'Preview' : 'Code'}</span>
        <FontAwesomeIcon icon={isCode ? faEye : faCode} aria-hidden="true" />
      </button>
    </header>
  );
};
