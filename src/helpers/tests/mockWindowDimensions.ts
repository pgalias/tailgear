export const mockWindowDimensions = (width: number, height: number): void => {
  Object.defineProperty(global.screen, 'width', {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(global.screen, 'height', {
    writable: true,
    configurable: true,
    value: height,
  });

  global.dispatchEvent(new Event('resize'));
};
