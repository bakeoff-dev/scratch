import { expect, test } from 'bun:test';
import { list } from './list';

test('returns all items by default', () => {
  expect(list([1, 2, 1, 3])).toEqual([1, 2, 1, 3]);
});

test('returns unique items when unique is set', () => {
  expect(list([1, 2, 1, 3, 2], { unique: true })).toEqual([1, 2, 3]);
});
