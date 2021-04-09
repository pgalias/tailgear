export type Mode = 'preview' | 'code';

export interface State {
  isNavigationVisible: boolean;
  mode: Mode;
}

export const initialState: State = {
  isNavigationVisible: true,
  mode: 'preview',
};
