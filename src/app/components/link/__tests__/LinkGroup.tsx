import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { BrowserRouter } from 'react-router-dom';
import { LinkGroup } from '../LinkGroup';
import { Link } from '../Link';

jest.mock('@fortawesome/react-fontawesome', () => ({
  ...(jest.requireActual('@fortawesome/react-fontawesome') as Record<
    string,
    unknown
  >),
  FontAwesomeIcon: () => <img src="https://google.com" alt="icon" />,
}));

describe('app::components::LinkGroup', () => {
  test('should render a group title with passed text', () => {
    render(
      <LinkGroup title="foo">
        <span>child1</span>
        <span>child2</span>
      </LinkGroup>
    );

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });

  test("should render a group title with the icon when it's passed", () => {
    const icon = ({} as unknown) as IconDefinition;
    render(
      <LinkGroup title="foo" icon={icon}>
        <span>child1</span>
        <span>child2</span>
      </LinkGroup>
    );

    expect(screen.getByAltText(/icon/i)).toBeInTheDocument();
  });

  test('should render a list of children', () => {
    render(
      <BrowserRouter>
        <LinkGroup title="foo">
          <Link name="bar" href="/baz" />
          <Link name="baz" href="/baz" />
        </LinkGroup>
      </BrowserRouter>
    );

    const list = within(screen.getByRole('list'));

    expect(list.getByRole('link', { name: /bar/i })).toBeInTheDocument();
    expect(list.getByRole('link', { name: /baz/i })).toBeInTheDocument();
  });
});
