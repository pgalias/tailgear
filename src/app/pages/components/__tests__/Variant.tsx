import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Variant } from '../Variant';
import { Clipboard } from '../../../../helpers/clipboard';
import { wrapper } from '../../../../helpers/tests';

jest.mock('../../../../helpers/clipboard', () => ({
  Clipboard: class MockClipboard {
    static write = jest.fn();
  },
}));

describe('app::pages::components::Variant', () => {
  const Component = () => (
    <div role="alert">
      <span>Hello</span>
      <p>World</p>
    </div>
  );

  const { Wrapper } = wrapper();

  describe('rendering', () => {
    test('should render a live coding component with provided component code', () => {
      render(<Variant component={Component} name="Variant name" />, {
        wrapper: Wrapper,
      });

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /variant name/i })
      ).toBeInTheDocument();
    });

    test('should render Variant with disclaimer text when its provided', () => {
      render(<Variant component={Component} disclaimer="Disclaimer" />, {
        wrapper: Wrapper,
      });

      expect(screen.getByRole('blockquote').textContent).toEqual('Disclaimer');
    });

    test('should render Variant without name when its not provided', () => {
      render(<Variant component={Component} />, { wrapper: Wrapper });

      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });
  });

  describe('copying code', () => {
    test('user should be able to copy the code', () => {
      render(<Variant component={Component} />, { wrapper: Wrapper });

      userEvent.click(screen.getByRole('button', { name: /copy/i }));

      expect(Clipboard.write).toHaveBeenCalledWith(
        `<div role="alert">\r\n  <span>Hello</span>\r\n  <p>World</p>\r\n</div>`
      );
    });

    test('user should be able to copy up to date code', () => {
      render(<Variant component={Component} />, { wrapper: Wrapper });

      const textbox = screen.getByRole('textbox');
      userEvent.clear(textbox);
      userEvent.type(textbox, '<p>Hello</p>');
      userEvent.click(screen.getByRole('button', { name: /copy/i }));

      expect(Clipboard.write).toHaveBeenCalledWith('<p>Hello</p>');
    });
  });
});
