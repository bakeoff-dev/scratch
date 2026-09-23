import { expect, test } from 'bun:test';
import { list, runList } from './list';

test('lists in order by default', () => { expect(list(['a','b','c'])).toEqual(['a','b','c']); });
test('reverse option flips order', () => { expect(list(['a','b','c'], { reverse: true })).toEqual(['c','b','a']); });
test('reverse does not mutate input', () => {
  const items = ['a','b','c'];
  list(items, { reverse: true });
  expect(items).toEqual(['a','b','c']);
});
test('empty list reverses to empty', () => { expect(list([], { reverse: true })).toEqual([]); });

test('command prints items in order', () => { expect(runList(['a','b','c'])).toBe('a\nb\nc'); });
test('command prints items reversed with --reverse', () => { expect(runList(['a','b','c','--reverse'])).toBe('c\nb\na'); });
test('--reverse is accepted before the items', () => { expect(runList(['--reverse','a','b','c'])).toBe('c\nb\na'); });
