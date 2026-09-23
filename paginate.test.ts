import { expect, test } from 'bun:test';
import { chunk, paginate } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('chunk splits items into arrays of at most the given size', () => {
  expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
});
test('chunk returns an empty array for empty items', () => {
  expect(chunk([], 3)).toEqual([]);
});
