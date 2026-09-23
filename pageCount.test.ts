import { expect, test } from 'bun:test';
import { pageCount } from './paginate';

test('pageCount(0, 10) is 0', () => { expect(pageCount(0, 10)).toBe(0); });
test('pageCount(10, 10) is 1', () => { expect(pageCount(10, 10)).toBe(1); });
test('pageCount(11, 10) is 2', () => { expect(pageCount(11, 10)).toBe(2); });
test('pageCount(25, 10) is 3', () => { expect(pageCount(25, 10)).toBe(3); });
