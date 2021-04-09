import { Mode, State } from './state';

export const isNavigationOpened = (store: State): boolean =>
  store.isNavigationVisible;

export const selectMode = (store: State): Mode => store.mode;

export const isPreviewMode = (store: State): boolean =>
  selectMode(store) === 'preview';

export const isCodeMode = (store: State): boolean =>
  selectMode(store) === 'code';
