export type Mode = 'preview' | 'code' | 'live' | 'static';

export interface State {
  mode: Mode;
}

export const initialState: State = {
  mode: 'preview',
};
