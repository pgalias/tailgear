import { htmlBeautifier } from '../htmlBeautifier';

describe('helpers::string::htmlBeautifier', () => {
  test.each([
    ['<div>foo</div>', '<div>foo</div>'],
    [
      '<p><span>2</span><span>3</span></p>',
      '<p>\r\n<span>2</span>\r\n<span>3</span>\r\n</p>',
    ],
    [
      '<html><head><title>Title</title></head><body><main><p>FooBar</p></main></body></html>',
      '<html>\r\n  <head>\r\n    <title>Title</title>\r\n  </head>\r\n  <body>\r\n    <main>\r\n      <p>FooBar</p>\r\n    </main>\r\n  </body>\r\n</html>',
    ],
  ])('should beautify passed html string', (input, output) => {
    expect(htmlBeautifier(input)).toEqual(output);
  });
});
