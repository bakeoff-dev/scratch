import { expect, test } from 'bun:test';
import { formatList, list, parseArgs } from './list';

test('lists items in order by default', () => { expect(list([1,2,3])).toEqual([1,2,3]); });
test('--reverse lists items in reverse order', () => { expect(list([1,2,3], { reverse: true })).toEqual([3,2,1]); });
test('--reverse does not mutate the input', () => {
  const items = [1,2,3];
  list(items, { reverse: true });
  expect(items).toEqual([1,2,3]);
});
test('parses --reverse as a flag, not an item', () => {
  expect(parseArgs(['a', '--reverse', 'b'])).toEqual({ items: ['a','b'], options: { reverse: true } });
});
test('parses no flags', () => {
  expect(parseArgs(['a', 'b'])).toEqual({ items: ['a','b'], options: { reverse: false } });
});
test('rejects unknown flags', () => { expect(() => parseArgs(['--nope'])).toThrow('unknown flag: --nope'); });
test('prints one item per line, reversed with --reverse', () => {
  const { items, options } = parseArgs(['a', 'b', 'c', '--reverse']);
  expect(formatList(items, options)).toBe('c\nb\na');
});
