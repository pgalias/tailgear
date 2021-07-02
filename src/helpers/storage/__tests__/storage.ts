import { Storage } from '../storage';

describe('helpers::Storage', () => {
  const actualStorage = { ...global.localStorage };
  const mockGet = jest.fn();
  const mockSet = jest.fn();

  beforeAll(() => {
    Object.defineProperty(global, 'localStorage', {
      writable: true,
      value: {
        ...actualStorage,
        getItem: mockGet,
        setItem: mockSet,
      },
    });
  });

  afterAll(() => {
    Object.defineProperty(global, 'localStorage', {
      writable: true,
      value: actualStorage,
    });
  });

  describe('get', () => {
    test("should return a parsed value from storage when it's present there", () => {
      mockGet.mockReturnValue('[1,2,3]');
      expect(Storage.get('key')).toEqual([1, 2, 3]);
    });

    test('should return undefined when value is not present in the storage', () => {
      mockGet.mockReturnValue('some incorrect string');
      expect(Storage.get('key')).toBeUndefined();
    });
  });

  describe('set', () => {
    test('should save a stringified value to the store', () => {
      Storage.set('key', { a: 123 });
      expect(mockSet).toHaveBeenCalledWith('key', '{"a":123}');
    });
  });

  describe('has', () => {
    test('should be truthy when value is present in the store', () => {
      mockGet.mockReturnValue('2');
      expect(Storage.has('key')).toBeTruthy();
    });

    test('should be falsy when value is not present in the store', () => {
      mockGet.mockReturnValue(undefined);
      expect(Storage.has('key')).toBeFalsy();
    });
  });
});
