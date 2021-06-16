import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  changeMode,
  selectMode,
  useDispatch,
  useSelector,
} from '../../store/layout';
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
  const currentMode = useSelector(selectMode);
  const dispatch = useDispatch();

  // change navigation visibility on route change or window width change
  useEffect(() => {
    const shouldNavigationBeVisible = width > NAVIGATION_VISIBILITY_BREAKPOINT;

    setShowNavigation(shouldNavigationBeVisible);
  }, [pathname, width]);

  const onHamburgerClick = () => {
    setShowNavigation(!showNavigation);
  };

  const onModeChange = () => {
    const toggledMode = currentMode === 'preview' ? 'code' : 'preview';

    dispatch(changeMode(toggledMode));
  };

  return (
    <div
      className={`${styles.layout} ${
        !showNavigation ? styles.layoutWithNav : ''
      }`}
    >
      <Header
        onHamburgerClick={onHamburgerClick}
        onModeChange={onModeChange}
        isNavigationVisible={showNavigation}
      />
      {showNavigation && <Navigation />}
      <Main />
    </div>
  );
};
