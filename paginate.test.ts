import { expect, test } from 'bun:test';
import { paginate, pageCount } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('pageCount of 0 items is 0', () => { expect(pageCount(0, 10)).toBe(0); });
test('pageCount rounds up partial pages', () => { expect(pageCount(21, 10)).toBe(3); });
test('pageCount of exact multiple', () => { expect(pageCount(20, 10)).toBe(2); });
