import { expect, test } from 'bun:test';
import { clampPage } from './paginate';

test('clamps pages below the first page', () => {
  expect(clampPage(0, 5)).toBe(1);
});

test('clamps pages beyond the page count', () => {
  expect(clampPage(9, 5)).toBe(5);
});

test('leaves pages within range unchanged', () => {
  expect(clampPage(3, 5)).toBe(3);
});
