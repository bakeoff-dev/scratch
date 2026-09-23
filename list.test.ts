import { expect, test } from 'bun:test';
import { list } from './list';
test('without unique returns items as-is', () => { expect(list([1,2,2,3])).toEqual([1,2,2,3]); });
test('with unique de-duplicates items', () => { expect(list([1,2,2,3,1], { unique: true })).toEqual([1,2,3]); });
