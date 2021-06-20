import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../header';
import { Navigation } from '../navigation';
import { Main } from '../main';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { NAVIGATION_VISIBILITY_BREAKPOINT } from '../../constants/navigation';

import styles from './layout.module.css';

export const Layout: FunctionComponent = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();

  // change navigation visibility on route change or window width change
  useEffect(() => {
    const shouldNavigationBeVisible = width >= NAVIGATION_VISIBILITY_BREAKPOINT;

    setShowNavigation(shouldNavigationBeVisible);
  }, [pathname, width]);

  const onHamburgerClick = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <div
      className={`${styles.layout} ${
        !showNavigation ? styles.layoutWithNav : ''
      }`}
    >
      <Header
        onHamburgerClick={onHamburgerClick}
        isNavigationVisible={showNavigation}
      />
      {showNavigation && <Navigation />}
      <Main />
    </div>
  );
};
