import { initialState, Mode, State } from './state';
import { ActionTypes } from './type';

export type Action<T = undefined> = {
  type: ActionTypes;
  payload?: T;
};

export const reducer = (
  state = initialState,
  { type, payload }: Action<unknown>
): State => {
  switch (type) {
    case ActionTypes.CHANGE_MODE:
      return { ...state, mode: payload as Mode };
    case ActionTypes.TOGGLE_NAVIGATION:
      return { ...state, isNavigationVisible: !state.isNavigationVisible };
    default:
      return state;
  }
};
