import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from '../Main';

describe('app::components::Main', () => {
  test('should render properly', () => {
    render(
      <Main>
        <span>child</span>
      </Main>
    );

    expect(screen.getByRole('main')).toMatchSnapshot();
  });
});
