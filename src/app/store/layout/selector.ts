import { Mode, State } from './state';

export const selectMode = (store: State): Mode => store.mode;
