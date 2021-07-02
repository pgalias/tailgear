import React, { FC } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useComponentCode } from '../useComponentCode';

describe('app::hooks::useComponentCode', () => {
  test('should return a passed component formatted code', () => {
    const ComponentToTest: FC = () => (
      <div>
        <span>Test</span>
        <p>Me</p>
      </div>
    );

    const { result } = renderHook(() => useComponentCode(ComponentToTest));

    const expected = '<div>\r\n  <span>Test</span>\r\n  <p>Me</p>\r\n</div>';

    expect(result.current).toEqual(expected);
  });
});
