import { expect, test } from 'bun:test';
import { paginate } from './paginate';
test('page 1 of size 2', () => { expect(paginate([1,2,3,4], 1, 2)).toEqual([1,2]); });
test('page 2 of size 2', () => { expect(paginate([1,2,3,4], 2, 2)).toEqual([3,4]); });
test('tail returns last size items, ignoring page', () => { expect(paginate([1,2,3,4,5], 1, 2, { tail: true })).toEqual([4,5]); });
