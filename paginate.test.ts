import { expect, test } from 'bun:test';
import { chunk, paginate } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('chunk splits into arrays of at most size', () => { expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]); });
test('chunk of empty array', () => { expect(chunk([], 3)).toEqual([]); });
