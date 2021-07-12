import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../logo';
import { useColorScheme } from '../../provider/colorScheme';
import { ColorScheme } from '../../../helpers/colorScheme';
import styles from './header.module.css';

type Props = {
  children?: React.ReactNode;
  isNavigationVisible: boolean;
  onHamburgerClick: () => void;
};

const hamburgerClassMapper = {
  [ColorScheme.LIGHT]: styles.hamburgerIconLight,
  [ColorScheme.DARK]: styles.hamburgerIconDark,
};

export const Header: FunctionComponent<Props> = ({
  isNavigationVisible,
  onHamburgerClick,
  children,
}) => {
  const { scheme } = useColorScheme();

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.left}>
          <Logo />
          <button
            className={`${styles.button} ${styles.hamburger}`}
            type="button"
            onClick={onHamburgerClick}
            aria-expanded={isNavigationVisible}
            tabIndex={0}
          >
            <span className={styles.hamburgerText}>
              {isNavigationVisible ? 'Close the menu' : 'Open the menu'}
            </span>
            <FontAwesomeIcon
              icon={isNavigationVisible ? faTimes : faBars}
              className={hamburgerClassMapper[scheme]}
              size="3x"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className={styles.right}>{children}</div>
      </div>
    </header>
  );
};
