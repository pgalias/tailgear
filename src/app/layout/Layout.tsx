import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/header';
import { Navigation } from '../components/navigation';
import { Main } from '../components/main';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { NAVIGATION_VISIBILITY_BREAKPOINT } from '../constants/navigation';
import { Pages } from '../pages';
import { LinksList as StaticLinksList } from '../pages/statics';
import { LinksList as ComponentsLinksList } from '../pages/components';
import { ColorSchemeSwitcher } from '../components/colorSchemeSwitcher';

import styles from './layout.module.css';

export const Layout: FC = () => {
  const [isTabletOrLargerDevice, setIsTabletOrLargerDevice] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();

  // change navigation visibility on route change or window width change
  useEffect(() => {
    const shouldNavigationBeVisible = width >= NAVIGATION_VISIBILITY_BREAKPOINT;

    setShowNavigation(shouldNavigationBeVisible);
    setIsTabletOrLargerDevice(shouldNavigationBeVisible);
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
      >
        {isTabletOrLargerDevice && <ColorSchemeSwitcher />}
      </Header>
      {showNavigation && (
        <Navigation>
          {!isTabletOrLargerDevice && <ColorSchemeSwitcher />}
          <StaticLinksList />
          <ComponentsLinksList />
        </Navigation>
      )}
      <Main>
        <Pages />
      </Main>
    </div>
  );
};
