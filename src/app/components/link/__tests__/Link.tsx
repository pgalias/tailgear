import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Link } from '../Link';
import { wrapper } from '../../../../helpers/tests';

jest.mock('@fortawesome/react-fontawesome', () => ({
  ...(jest.requireActual('@fortawesome/react-fontawesome') as Record<
    string,
    unknown
  >),
  FontAwesomeIcon: () => <img src="https://google.com" alt="icon" />,
}));

describe('app::components::Link', () => {
  const { history, Wrapper } = wrapper();

  test('should render a link with a text', () => {
    render(<Link name="foo" href="/bar" />, { wrapper: Wrapper });

    const link = screen.getByRole('link');

    expect(link.textContent).toBe(' foo');

    userEvent.click(link);

    expect(history.location.pathname).toBe('/bar');
  });

  test("should render a link with icon when it's passed", () => {
    const icon = ({} as unknown) as IconDefinition;
    render(<Link name="foo" href="/foo" icon={icon} />, { wrapper: Wrapper });

    expect(screen.getByAltText(/icon/i)).toBeInTheDocument();
  });

  test('should add a section name before a link text when its passed', () => {
    render(<Link name="bar" href="/bar" section="foo" />, { wrapper: Wrapper });

    const link = screen.getByRole('link');
    expect(link.textContent).toBe('foo bar');
  });
});
