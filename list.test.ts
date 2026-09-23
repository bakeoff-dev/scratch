import { expect, test } from 'bun:test';
import { list, runList } from './list';

test('lists every item by default', () => { expect(list(['a','b','c'])).toEqual(['a','b','c']); });
test('tail returns the last N entries', () => { expect(list(['a','b','c'], { tail: 2 })).toEqual(['b','c']); });
test('tail larger than the list returns everything', () => { expect(list(['a','b'], { tail: 5 })).toEqual(['a','b']); });
test('tail 0 returns nothing', () => { expect(list(['a','b'], { tail: 0 })).toEqual([]); });
test('tail does not mutate input', () => {
  const items = ['a','b','c'];
  list(items, { tail: 1 });
  expect(items).toEqual(['a','b','c']);
});
test('negative tail is rejected', () => { expect(() => list(['a'], { tail: -1 })).toThrow(); });

test('command prints all items without --tail', () => { expect(runList(['a','b','c'])).toBe('a\nb\nc'); });
test('command prints the last N items with --tail N', () => { expect(runList(['a','b','c','--tail','2'])).toBe('b\nc'); });
test('--tail is accepted before the items', () => { expect(runList(['--tail','1','a','b','c'])).toBe('c'); });
test('--tail=N form is supported', () => { expect(runList(['a','b','c','--tail=2'])).toBe('b\nc'); });
test('--tail 0 prints nothing', () => { expect(runList(['a','b','--tail','0'])).toBe(''); });
test('--tail without a value is an error', () => { expect(() => runList(['a','--tail'])).toThrow('--tail requires a value'); });
test('--tail with a non-integer value is an error', () => { expect(() => runList(['a','--tail','two'])).toThrow(); });
