import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useStore } from '../store';
import { toggleNavigationAction } from '../store/action';

export const Layout: FunctionComponent = () => {
  const dispatch = useDispatch();
  const state = useStore();

  useEffect(() => {
    console.log(state, 'state');
  }, [state]);

  return (
    <>
      <span>State</span>
      <button type="button" onClick={() => dispatch(toggleNavigationAction())}>
        clk
      </button>
    </>
  );
};
