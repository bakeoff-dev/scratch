import { expect, test } from 'bun:test';
import { paginate, clampPage } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('clampPage clamps below range to 1', () => { expect(clampPage(0, 5)).toBe(1); });
test('clampPage clamps above range to pageCount', () => { expect(clampPage(9, 5)).toBe(5); });
test('clampPage returns page unchanged when in range', () => { expect(clampPage(3, 5)).toBe(3); });
