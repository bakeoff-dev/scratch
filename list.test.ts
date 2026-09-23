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

test('--count prints the number of entries instead of the entries', () => {
  expect(runList(['a', 'b', 'c', '--count'])).toBe('3');
});

test('--count combined with --dedupe prints the number of unique entries', () => {
  expect(runList(['a', 'b', 'a', 'c', 'b', '--dedupe', '--count'])).toBe('3');
});

test('--count combined with --reverse prints the correct count', () => {
  expect(runList(['a', 'b', 'c', '--reverse', '--count'])).toBe('3');
});

test('--count with no entries prints 0', () => {
  expect(runList(['--count'])).toBe('0');
});
