import { Clipboard } from '../clipboard';

describe('helpers::Clipboard', () => {
  const originalClipboard = { ...global.navigator.clipboard };

  afterAll(() => {
    Object.defineProperty(global.navigator, 'clipboard', {
      writable: true,
      value: originalClipboard,
    });
  });

  describe('write', () => {
    test('should write passed text to the clipboard', () => {
      const writeTextMock = jest.fn();
      Object.defineProperty(global.navigator, 'clipboard', {
        writable: true,
        value: {
          ...originalClipboard,
          writeText: writeTextMock,
        },
      });

      Clipboard.write('foo');
      expect(writeTextMock).toHaveBeenCalledWith('foo');
    });
  });
});
