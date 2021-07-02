import { act, renderHook } from '@testing-library/react-hooks';
import { useWindowDimensions } from '../useWindowDimensions';
import { mockWindowDimensions } from '../../../helpers/tests';

describe('app::hooks::useWindowDimensions', () => {
  test('should return current window width and height', () => {
    mockWindowDimensions(500, 250);

    const { result } = renderHook(() => useWindowDimensions());
    expect(result.current).toEqual({
      width: 500,
      height: 250,
    });

    act(() => {
      mockWindowDimensions(750, 500);
    });

    expect(result.current).toEqual({
      width: 750,
      height: 500,
    });
  });
});
