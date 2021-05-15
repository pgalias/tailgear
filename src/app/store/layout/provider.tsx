import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  useReducer,
} from 'react';
import { initialState, State } from './state';
import { Action, reducer } from './reducer';

type StoreContext = {
  state: State;
  dispatch: React.Dispatch<Action<unknown>>;
};

const Context = React.createContext<StoreContext | undefined>(undefined);

export const useDispatch = (): React.Dispatch<Action<unknown>> => {
  const { dispatch } = useContext(Context) as StoreContext;

  if (!dispatch) {
    throw new Error('Please use within StoreContext');
  }

  return dispatch;
};

export const useSelector = <T,>(selector: (store: State) => T): T => {
  const { state } = useContext(Context) as StoreContext;

  if (!state) {
    throw new Error('Please use within StoreContext');
  }

  return selector(state);
};

export const useStore = (): State => {
  const { state } = useContext(Context) as StoreContext;

  if (!state) {
    throw new Error('Please use within StoreContext');
  }

  return state;
};

export const StoreProvider: FunctionComponent<{ children: ReactElement }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
