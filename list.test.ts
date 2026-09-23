import { expect, test } from 'bun:test';
import { list, runList } from './list';

test('dedupe keeps the first occurrence of each item', () => {
  expect(list(['a', 'b', 'a', 'c', 'b'], { dedupe: true })).toEqual(['a', 'b', 'c']);
});

test('--dedupe removes repeated items from command output', () => {
  expect(runList(['a', 'b', 'a', '--dedupe', 'c', 'b'])).toBe('a\nb\nc');
});

test('--dedupe can be combined with --reverse', () => {
  expect(runList(['a', 'b', 'a', '--dedupe', '--reverse'])).toBe('b\na');
});
