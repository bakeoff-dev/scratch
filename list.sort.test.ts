import { expect, test } from 'bun:test';
import { list, runList } from './list';

test('--sort sorts entries alphabetically before printing', () => {
  expect(runList(['pear', 'apple', 'orange', '--sort'])).toBe('apple\norange\npear');
});

test('--sort is applied before --limit', () => {
  expect(list(['pear', 'apple', 'orange'], { sort: true, limit: 2 })).toEqual(['apple', 'orange']);
});
