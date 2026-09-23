import { expect, test } from 'bun:test';
import { list, runList } from './list';

test('sorts entries alphabetically', () => {
  expect(list(['pear', 'apple', 'orange'], { sort: true })).toEqual(['apple', 'orange', 'pear']);
});

test('--sort sorts entries alphabetically before printing', () => {
  expect(runList(['pear', 'apple', 'orange', '--sort'])).toBe('apple\norange\npear');
});

test('without --sort preserves original order', () => {
  expect(runList(['pear', 'apple', 'orange'])).toBe('pear\napple\norange');
});
