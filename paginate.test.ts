import { expect, test } from 'bun:test';
import { pageSlice, paginate } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('pageSlice returns the slice bounds for a page', () => { expect(pageSlice(1, 10)).toEqual({ start: 0, end: 10 }); });
