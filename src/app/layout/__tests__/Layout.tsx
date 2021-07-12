import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Layout } from '../Layout';
import { NAVIGATION_VISIBILITY_BREAKPOINT } from '../../constants/navigation';
import { mockWindowDimensions, wrapper } from '../../../helpers/tests';

describe('app::Layout', () => {
  const { Wrapper } = wrapper();

  beforeEach(() => {
    // assume we're working on mobile device
    mockWindowDimensions(NAVIGATION_VISIBILITY_BREAKPOINT - 1, 120);
  });

  test(`should render layout with navigation when screen width is greater or equal than ${NAVIGATION_VISIBILITY_BREAKPOINT}`, () => {
    mockWindowDimensions(NAVIGATION_VISIBILITY_BREAKPOINT, 120);

    render(<Layout />, { wrapper: Wrapper });

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test(`should render layout without navigation when screen width is lower than ${NAVIGATION_VISIBILITY_BREAKPOINT}`, () => {
    render(<Layout />, { wrapper: Wrapper });

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test(`should hide a navigation after the link click on screen width lower than ${NAVIGATION_VISIBILITY_BREAKPOINT}`, () => {
    render(<Layout />, { wrapper: Wrapper });

    // click hamburger to show the navigation
    userEvent.click(screen.getByRole('button', { name: /open the menu/i }));

    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();

    // click any link from the navigation
    userEvent.click(within(navigation).getByRole('link', { name: /alerts/i }));

    expect(navigation).not.toBeInTheDocument();
  });
});
