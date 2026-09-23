import { expect, test } from 'bun:test';
import { list, runList } from './list';

test('lists every item by default', () => { expect(list(['a','b','c'])).toEqual(['a','b','c']); });
test('limit caps the number of entries', () => { expect(list(['a','b','c'], { limit: 2 })).toEqual(['a','b']); });
test('limit larger than the list returns everything', () => { expect(list(['a','b'], { limit: 5 })).toEqual(['a','b']); });
test('limit 0 returns nothing', () => { expect(list(['a','b'], { limit: 0 })).toEqual([]); });
test('limit does not mutate input', () => {
  const items = ['a','b','c'];
  list(items, { limit: 1 });
  expect(items).toEqual(['a','b','c']);
});
test('negative limit is rejected', () => { expect(() => list(['a'], { limit: -1 })).toThrow(); });

test('command prints all items without --limit', () => { expect(runList(['a','b','c'])).toBe('a\nb\nc'); });
test('command prints at most N items with --limit N', () => { expect(runList(['a','b','c','--limit','2'])).toBe('a\nb'); });
test('--limit is accepted before the items', () => { expect(runList(['--limit','1','a','b','c'])).toBe('a'); });
test('--limit=N form is supported', () => { expect(runList(['a','b','c','--limit=2'])).toBe('a\nb'); });
test('--limit 0 prints nothing', () => { expect(runList(['a','b','--limit','0'])).toBe(''); });
test('--limit without a value is an error', () => { expect(() => runList(['a','--limit'])).toThrow('--limit requires a value'); });
test('--limit with a non-integer value is an error', () => { expect(() => runList(['a','--limit','two'])).toThrow(); });
