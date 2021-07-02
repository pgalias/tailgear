import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { Header } from '../Header';
import { wrapper } from '../../../../helpers/tests';

describe('app::components::Header', () => {
  const { Wrapper } = wrapper();

  test('should call onHamburgerClick callback when user clicks on the hamburger button', () => {
    const onClick = jest.fn();
    render(
      <Header isNavigationVisible={false} onHamburgerClick={onClick}>
        <span>child</span>
      </Header>,
      { wrapper: Wrapper }
    );

    userEvents.click(screen.getByRole('button', { name: /open the menu/i }));

    expect(onClick).toHaveBeenCalled();
  });

  test('hamburger button should look differently on changing navigation visibility prop', () => {
    const { rerender } = render(
      <Header isNavigationVisible onHamburgerClick={jest.fn()}>
        <span>child</span>
      </Header>,
      { wrapper: Wrapper }
    );

    expect(
      screen.getByRole('button', { name: /close the menu/i })
    ).toBeInTheDocument();

    rerender(
      <Header isNavigationVisible={false} onHamburgerClick={jest.fn()}>
        <span>child</span>
      </Header>
    );

    expect(
      screen.getByRole('button', { name: /open the menu/i })
    ).toBeInTheDocument();
  });

  test('should render logo component', () => {
    render(
      <Header isNavigationVisible onHamburgerClick={jest.fn()}>
        <span>child</span>
      </Header>,
      { wrapper: Wrapper }
    );

    expect(screen.getByAltText(/no logo yet/i)).toBeInTheDocument();
  });
});
