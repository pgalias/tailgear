import { ActionTypes } from './type';
import { Action } from './reducer';
import { Mode } from './state';

export const toggleNavigationAction = (): Action => ({
  type: ActionTypes.TOGGLE_NAVIGATION,
});

export const changeMode = (mode: Mode): Action<Mode> => ({
  type: ActionTypes.CHANGE_MODE,
  payload: mode,
});
