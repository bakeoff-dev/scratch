import { expect, test } from 'bun:test';
import { clamp } from './paginate';

test('clamps values below and above the bounds', () => {
  expect(clamp(-1, 0, 10)).toBe(0);
  expect(clamp(11, 0, 10)).toBe(10);
});

test('returns values within the bounds unchanged', () => {
  expect(clamp(5, 0, 10)).toBe(5);
});
