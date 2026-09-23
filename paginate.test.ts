import { expect, test } from 'bun:test';
import { paginate, pageCount } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('pageCount returns the pages needed', () => { expect(pageCount(11, 10)).toBe(2); });
test('pageCount returns zero for no items', () => { expect(pageCount(0, 10)).toBe(0); });
