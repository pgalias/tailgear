import React, { FunctionComponent } from 'react';
import {
  changeMode,
  isNavigationOpened,
  selectMode,
  toggleNavigationAction,
  useDispatch,
  useSelector,
} from '../store';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import { Main } from '../main/Main';
import { Storage } from '../../helpers/storage';
import { StorageKeys } from '../../constants';
import { Clipboard } from '../../helpers/clipboard';

import styles from './layout.module.css';

export const Layout: FunctionComponent = () => {
  const isNavigationVisible = useSelector(isNavigationOpened);
  const currentMode = useSelector(selectMode);
  const dispatch = useDispatch();

  const onHamburgerClick = () => {
    dispatch(toggleNavigationAction());
  };

  const onCopy = () => {
    const code = Storage.get<string>(StorageKeys.ComponentCode);
    Clipboard.write(code);
  };

  const onModeChange = () => {
    const toggledMode = currentMode === 'preview' ? 'code' : 'preview';

    dispatch(changeMode(toggledMode));
  };

  return (
    <div
      className={`${styles.layout} ${
        !isNavigationVisible ? styles.layoutWithNav : ''
      }`}
    >
      <Header
        onHamburgerClick={onHamburgerClick}
        onCopy={onCopy}
        onModeChange={onModeChange}
      />
      {isNavigationVisible && <Navigation />}
      <Main />
    </div>
  );
};
