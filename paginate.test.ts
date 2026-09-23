import { expect, test } from 'bun:test';
import { pageCount, paginate } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('page count rounds up to include a partial page', () => { expect(pageCount(11, 10)).toBe(2); });
test('page count is zero for no items', () => { expect(pageCount(0, 10)).toBe(0); });
