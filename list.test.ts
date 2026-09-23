import { expect, test } from 'bun:test';
import { list, parseListArgs } from './list';

test('lists items in order by default', () => { expect(list(['a','b','c'])).toEqual(['a','b','c']); });
test('--reverse lists items in reverse order', () => { expect(list(['a','b','c'], { reverse: true })).toEqual(['c','b','a']); });
test('does not mutate the input', () => {
  const items = ['a','b','c'];
  list(items, { reverse: true });
  expect(items).toEqual(['a','b','c']);
});
test('reversing an empty list', () => { expect(list([], { reverse: true })).toEqual([]); });
test('parses --reverse out of the arguments', () => {
  expect(parseListArgs(['a','--reverse','b'])).toEqual({ items: ['a','b'], options: { reverse: true } });
});
test('parses arguments without --reverse', () => {
  expect(parseListArgs(['a','b'])).toEqual({ items: ['a','b'], options: {} });
});
