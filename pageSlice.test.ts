import { expect, test } from 'bun:test';
import { pageSlice } from './paginate';

test('pageSlice(1, 10) is { start: 0, end: 10 }', () => {
  expect(pageSlice(1, 10)).toEqual({ start: 0, end: 10 });
});

test('pageSlice(2, 10) is { start: 10, end: 20 }', () => {
  expect(pageSlice(2, 10)).toEqual({ start: 10, end: 20 });
});
