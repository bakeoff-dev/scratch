import { expect, test } from 'bun:test';
import { paginate } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('rejects a size of 0', () => {
  expect(() => paginate([1, 2, 3], 1, 0)).toThrow(new RangeError('size must be at least 1'));
});
test('rejects a negative size', () => {
  expect(() => paginate([1, 2, 3], 1, -1)).toThrow(new RangeError('size must be at least 1'));
});
