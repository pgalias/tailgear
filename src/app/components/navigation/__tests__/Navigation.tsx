import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from '../Navigation';

describe('app::components::Navigation', () => {
  test('should render properly', () => {
    render(
      <Navigation>
        <ul>
          <li>
            <a href="/foo">foo</a>
          </li>
          <li>
            <a href="/bar">bar</a>
          </li>
        </ul>
        <button type="button">btn</button>
      </Navigation>
    );

    expect(screen.getByRole('navigation')).toMatchSnapshot();
  });
});
