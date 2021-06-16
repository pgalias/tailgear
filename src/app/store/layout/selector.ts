import { Mode, State } from './state';

export const isNavigationOpened = (store: State): boolean =>
  store.isNavigationVisible;

export const selectMode = (store: State): Mode => store.mode;
