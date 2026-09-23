import { expect, test } from 'bun:test';
import { list } from './list';

test('formats entries as lines by default', () => {
  expect(list(['alpha', 'beta'])).toBe('alpha\nbeta');
});

test('formats entries as a JSON array with --json', () => {
  expect(list(['alpha', 'beta'], ['--json'])).toBe('["alpha","beta"]');
});
